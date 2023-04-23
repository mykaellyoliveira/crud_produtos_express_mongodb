import {Schema, model} from 'mongoose'

const productSchema = new Schema({
   name: String, 
   quantity: Number,
   price: Number
},{
    timestamps: true
})

export default model('Product', productSchema)

