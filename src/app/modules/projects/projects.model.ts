import { Schema, model } from "mongoose";
import { TProject } from "./projects.interface";

const projectsSchema=new Schema<TProject>({

      title: {
        type: String,
        required: true
      },
      des: {
        type: String,
        required: true
      },
      img: {
        type: String,
        required: true
      },
      iconLists: {
        type: [String],
        
      },
      link: {
        type: String,
        required: true
      },
      heading: {
        type: String,
        required: true
      },
      clientSiteCode: {
        type: String,
        required: true
      },
      backendSiteCode: {
        type: String,
        required: true
      },
      techStack:{
        type:[String],
        required:true
      }
},{
    timestamps:true
})

export const Project=model<TProject>('Project',projectsSchema)