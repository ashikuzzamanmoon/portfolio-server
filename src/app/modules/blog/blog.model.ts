import { Schema, model } from "mongoose";
import bcrypt from 'bcrypt';
import config from "../../config";
import { TBlog } from "./blog.interface";

 const blogSchema=new Schema<TBlog>({
    authorName:{
        type:String,
        required:true
    },
    quote:{
        type:String,
        required:true
    },
    file:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    isDeleted:{
        type:Boolean,
        default:false
    }
},{
    timestamps:true
})
  
export const Blog=model<TBlog>('Blog',blogSchema)