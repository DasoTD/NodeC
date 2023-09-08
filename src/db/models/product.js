import mongoose, {Schema} from "mongoose";
import User from "./User";

const ProductSchema = new Schema({
    name: { type : String},
    price: String,
    description: String,
    images : [{ type: String}],
    owner: { type: Schema.ObjectId, ref: User
    }

});

const ProductModel = mongoose.model(ProductSchema);

export default {
    ProductModel,
    ProductSchema
}