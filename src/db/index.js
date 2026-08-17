import mongoose from "mongoose";
import { DB_NAME } from "../constants";

const connectDb = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log("MongoDb Connected");
    } catch (error) {
        console.log("MONGODB Connection Error", error);
        process.exit(1)
    }
}