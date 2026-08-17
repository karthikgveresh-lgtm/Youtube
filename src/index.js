// require('dotenv').config({ path: './env' })


import connectDb from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
    path: './.env'
})

connectDb()







// import express from "express"
// const app = express()

//     (async () => {
//         try {
// await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
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