import mongoose, { Schema } from "mongoose";

const videoSchema = new mongoose.Schema(
    {
        videoFile: {
            type: String
        },

        thumbNail: {
            type: String
        },

        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },

        titel: {
            type: String,
            required: true
        },

        description: {
            type: String,
            required: true
        },

        duration: {
            type: Number,
            required: true
        },

        views: {
            type: Number
        },

        isPublished: {
            type: Boolean,
            default: true
        }

    },

    { timestamps: true }

)

export const Video = mongoose.model("Video", videoSchema)