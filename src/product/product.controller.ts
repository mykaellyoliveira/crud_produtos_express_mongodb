import { Request, Response } from 'express'
import { ProductService } from './product.service'

class ProductController{
    async create(req: Request, res: Response){
        const product = await new ProductService().create(req.body)
        return res.status(200).json(product)
    }

    async read(req: Request, res:Response)
    {
        const product = await new ProductService().read()
        return res.status(201).json(product)
    }

    async update(req: Request, res: Response){
        const product = await new ProductService().update(req.params.id, req.body)
        return res.status(200).json(product)
    }

    async delete(req: Request, res: Response){
        const deleteStatus = await new ProductService().delete(req.params.id)
        return res.status(200).json(deleteStatus)
    }

    async listRandom(req: Request, res:Response){
        const productsRandom = await new ProductService().listRandom()
        return res.status(200).json(productsRandom)
    }

    async writeProducts(req: Request, res:Response){
        const product = await new ProductService().writeProducts()
        return res.status(201).json(product)
    }

    async readProducts(req: Request, res:Response){
        const product = await new ProductService().listProducts()
        return res.status(200).json(product)
    }

}

export default new ProductController()