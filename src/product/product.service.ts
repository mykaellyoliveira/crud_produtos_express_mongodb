import { ProductType } from "./types/product.types";
import Product from './product.schema'

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

}
