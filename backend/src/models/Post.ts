import mongoose, { Schema,Document, model,Model } from "mongoose";
// EXAMPLE 
/*
    {
        "description":"This is the 1 post",
        "img_url":"idk.com",
        "opening_left":101,
        "tags": ["rohit is a good boy", "zense rocks","why is"],
        "user": "63aff416b670cba82e5ee76d"
    }
*/
interface PostInput {
    description: string;
    img_url: string;
    opening_left: number;
    tags: string[];
}

interface IPost extends PostInput, Document {
    like: number;
}

const PostSchema = new Schema({
    like: {
        type: Number,
        required: true,
        default: 0
    },
    description: {
        type: String,
        required: true,
        default: ""
    },
    img_url: {
        type: String,
        required: true,
        default: "" 
    },
    opening_left: {
        type: Number,
        required: true,
        default: 0
    },
    tags: {
        type: [String],
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

const Post: Model<IPost> = model<IPost>("Post", PostSchema)
export { Post, IPost, PostInput }