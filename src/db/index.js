import mongoose from "mongoose";
import { DB_NAME } from "../constants";

// const connectDB = async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         console.log("MongoDb Connected");
//     } catch (error) {
//         console.log("MONGODB Connection Error", error);
//         process.exit(1)
//     }
// }

const connectDb = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log("MongoDb Connected");
    } catch (error) {
        console.log("MONGODB Connection Error", error);
        process.exit(1)
    }
}