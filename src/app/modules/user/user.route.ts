import express from 'express';
import { validateRequest } from '../../middlewares/validateRequest';
import auth from '../../middlewares/auth';
import { UserControllers } from './user.controller';

const router=express.Router();

router.post('/',UserControllers.createUser)


export const UserRoutes=router;