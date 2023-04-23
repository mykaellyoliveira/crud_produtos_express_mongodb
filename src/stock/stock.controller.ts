import { Request, Response } from 'express'
import { StockService } from './stock.service'

class StockController{
    async createStock(req: Request, res: Response){
        const stock = await new StockService().stock()
        return res.status(200).json(stock)
    }

    async stockValue(req: Request, res:Response){
        const stock = await new StockService().stockValue()
        return res.status(200).json(stock)
    }
}

export default new StockController()