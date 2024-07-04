import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { TBlog } from "./blog.interface";
import { Blog } from "./blog.model";


const createBlog=async(payload:TBlog)=>{
    const result=await Blog.create(payload);
    return result;
}
const getBlogById=async(id:string)=>{
    const result=await Blog.findById(id);
    return result;
  }
const getAllBlogsFromDb=async()=>{
    const result=await Blog.find({isDeleted:false});
    return result;
  }
const updateBlogFromDb=async(id:string,payload:Partial<TBlog>)=>{
    const blog=await Blog.findById(id);
    if(!blog){
        throw new AppError(httpStatus.NOT_FOUND,"Blog not exist!")
    }
    const result=await Blog.findByIdAndUpdate(id,payload,{
       new:true,
       runValidators:true 
    });
    return result;
  }

// delete blog 
const softDeleteBlogByIdFromDb = async (id: string) => {
    const blog=await Blog.findById(id);
    if(!blog){
        throw new AppError(httpStatus.NOT_FOUND,"Blog not exist!")
    }
    const result = await Blog.findByIdAndUpdate(id, {isDeleted:true}, {
      new: true,
      runValidators: true,
    });
    return result;
  }
  
  
  export const BlogServices={
      createBlog,
      getBlogById,
      getAllBlogsFromDb,
      updateBlogFromDb,
      softDeleteBlogByIdFromDb
  }