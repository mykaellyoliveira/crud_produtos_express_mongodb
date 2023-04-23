import { ProductType } from "./types/product.types";
import Product from './product.schema'
import { writeFile, readFile } from "fs/promises";

export class ProductService{
    
    constructor(){}

    //crud
    // create 
    async create(product: ProductType){
        const result = await Product.create(product)
        return result
    }

    //read
    async read(){
        const result = await Product.find()
        return result
    }

    //update 
    async update(id, data: ProductType){
        const updateProduct = await Product.findOneAndUpdate({_id:id},{
            name: data.name,
            quantity: data.quantity,
            price: data.price
        }, {new: true})

        return updateProduct
    }

    //delete
    async delete(id){
        await Product.findOneAndDelete(id)
        return "successfully delete product!"
    }

    // uma rota que busque 10 produtos e retorne 4 de maneira aleatórios
    async listRandom(){
        const array = await Product.find().limit(10)
        let result: any = []

        while(result.length < 4){
            let randomIndex = Math.floor(Math.random() * array.length)
            let randomObject: any = array[randomIndex]

            if(!result.includes(randomObject)){
                result.push(randomObject)
            } 
        }
        return result
    }

    async writeProducts(){
        const result = await Product.find()
        await writeFile('products.json', JSON.stringify(result, null, 2))
        return "products inserted into a json file successfully!"
    }

    async listProducts(){
        const result = await readFile('products.json', "utf-8")
        return JSON.parse(result)
    }
}
