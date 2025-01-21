import mongoose from 'mongoose'



const productSchema = new mongoose.Schema({
    productName : String,
    art_number : String,
    images : Array,
    video : String 
})


const productDb = mongoose.model("Products",productSchema)

export default productDb