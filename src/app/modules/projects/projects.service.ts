import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { TProject } from "./projects.interface";
import { Project } from "./projects.model";

const createProject=async(payload:TProject)=>{
    const result=await Project.create(payload);
    return result;
}
const getAllProjects=async()=>{
    const result=await Project.find();
    return result;
}
const getSingleProject=async(id:string)=>{
    const result=await Project.findById(id);
    return result;
}

// delete blog 
const softDeleteProjectByIdFromDb = async (id: string) => {
    const blog=await Project.findById(id);
    if(!blog){
        throw new AppError(httpStatus.NOT_FOUND,"Project not exist!")
    }
    const result = await Project.findByIdAndUpdate(id, {isDeleted:true}, {
      new: true,
      runValidators: true,
    });
    return result;
  }

export const ProjectServices={
    createProject,
    getAllProjects,
    getSingleProject,
    softDeleteProjectByIdFromDb
}