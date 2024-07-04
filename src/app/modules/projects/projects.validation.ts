import { z } from 'zod';

const projectSchema = z.object({
  body:z.object({
    title: z.string(),
    heading: z.string(),
    clientSiteCode: z.string(),
    backendSiteCode: z.string(),
    techStack: z.array(z.string()),
    des: z.string(),
    img: z.string(),
    iconLists: z.array(z.string()).optional(),
    link: z.string()
  })
});

export const projectValidationSchemas={
    projectSchema
    }