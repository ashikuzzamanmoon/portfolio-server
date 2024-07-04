import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ProjectServices } from "./projects.service";


const createProject=catchAsync(async(req,res)=>{
   const result=await ProjectServices.createProject(req.body);
   sendResponse(res,{
    statusCode:httpStatus.CREATED,
    success:true,
    message:"Project created successfully",
    data:result
   })
})
const getAllProjects=catchAsync(async(req,res)=>{
   const result=await ProjectServices.getAllProjects();
   sendResponse(res,{
    statusCode:httpStatus.OK,
    success:true,
    message:"Project fetch successfully",
    data:result
   })
})
const getSingleProject=catchAsync(async(req,res)=>{
    const {id}=req.params;
   const result=await ProjectServices.getSingleProject(id);
   sendResponse(res,{
    statusCode:httpStatus.OK,
    success:true,
    message:"Project fetch successfully",
    data:result
   })
})

const softDeleteProject=catchAsync(async(req,res)=>{
   const {projectId}=req.params;
   const result=await ProjectServices.softDeleteProjectByIdFromDb(projectId);
   sendResponse(res,{
    statusCode:httpStatus.OK,
    success:true,
    message:"Project deleted successfully",
    data:result
   })
})

export const ProjectControllers={
    createProject,
    getAllProjects,
    getSingleProject,
    softDeleteProject
}