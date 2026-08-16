import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";



// import express from "express"
// const app = express()

//     (async () => {
//         try {
//             await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//             console.log("MongoDb Connected")
//             app.on("Error", (error) => {
//                 console.log("ERROR : ", error)
//                 throw error
//             })

//             app.listen(process.env.PORT, () => {
//                 console.log(`App is running on port ${process.env.PORT}`)
//             })
//         } catch (error) {
//             console.error("ERROR : ", error)
//             throw error
//         }

//     })()