import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"


const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },

        fullName: {
            type: String,
            required: true,
            trim: true,
            index: true
        },

        avatar: {
            type: String,
            required: true
        },

        coverimage: {
            type: String,
        },

        password: {
            type: String,
            required: [true, "Password is Required"]
        },

        watchhistory: [
            {
                type: Schema.Types.ObjectId,
                ref: "Video"
            }
        ],

        refreshToken: {
            type: String
        }
    },

    { timestamps: true }
)

UserSchema.pre("save", async function (next) {

    if (!this.isModified("password")) return next();

    this.password = bcrypt.hash(this.password, 10)
    next()
})


UserSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}

export const User = mongoose.model("User", UserSchema)