
import mongoose from "mongoose";

const productsModel = new mongoose.Schema({
    name : String,
    price : String,
    company : String,
    color : String,
    category : String
});

export const Products = mongoose.models.products || mongoose.model("products", productsModel);