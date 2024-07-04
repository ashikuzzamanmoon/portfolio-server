import express from 'express';
import { validateRequest } from '../../middlewares/validateRequest';
import { ProjectControllers } from './projects.controller';
import { projectValidationSchemas } from './projects.validation';
import auth from '../../middlewares/auth';

const router=express.Router();

router.post('/',auth(),validateRequest(projectValidationSchemas.projectSchema),ProjectControllers.createProject)
router.get('/',ProjectControllers.getAllProjects)
router.get('/:id',ProjectControllers.getSingleProject)
router.delete('/:projectId',auth(),ProjectControllers.softDeleteProject)


export const ProjectsRoutes=router;