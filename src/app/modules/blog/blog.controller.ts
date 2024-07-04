import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { BlogServices } from "./blog.service";



const createBlog=catchAsync(async(req,res)=>{
   const result=await BlogServices.createBlog(req.body);
   sendResponse(res,{
    statusCode:httpStatus.CREATED,
    success:true,
    message:"Blog created successfully",
    data:result
   })
})
const getAllBlogs=catchAsync(async(req,res)=>{
   const result=await BlogServices.getAllBlogsFromDb();
   sendResponse(res,{
    statusCode:httpStatus.OK,
    success:true,
    message:"Blog fetch successfully",
    data:result
   })
})
const getBlogById=catchAsync(async(req,res)=>{
   const {blogId}=req.params;
   const result=await BlogServices.getBlogById(blogId);
   sendResponse(res,{
    statusCode:httpStatus.OK,
    success:true,
    message:"Blog fetch successfully",
    data:result
   })
})
const updateBlog=catchAsync(async(req,res)=>{
   const {blogId}=req.params;
   const result=await BlogServices.updateBlogFromDb(blogId,req.body);
   sendResponse(res,{
    statusCode:httpStatus.OK,
    success:true,
    message:"Blog updated successfully",
    data:result
   })
})
const softDeleteBlog=catchAsync(async(req,res)=>{
   const {blogId}=req.params;
   const result=await BlogServices.softDeleteBlogByIdFromDb(blogId);
   sendResponse(res,{
    statusCode:httpStatus.OK,
    success:true,
    message:"Blog deleted successfully",
    data:result
   })
})

export const BlogControllers={
    createBlog,
    getAllBlogs,
    updateBlog,
    softDeleteBlog,
    getBlogById
}