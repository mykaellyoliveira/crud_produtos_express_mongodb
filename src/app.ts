import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import routes from './routes'

class App{
    public express: express.Application

    public constructor(){
        this.express = express()

        this.middlewares()

        this.database()

        this.routes()
    }

    private middlewares(): void{
        this.express.use(express.json())
        this.express.use(cors())
    }

    private async database(){
        try{
            mongoose.set("strictQuery", true)
            await mongoose.connect('mongodb://0.0.0.0:27017/Product')
            console.log('Connect database sucess')
        } 
        catch(err){
            console.error('Connect database error')
        }
    }

    private routes(): void{
        this.express.use(routes)
    }
}

export default new App().express