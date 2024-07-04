import express from 'express';
import { AuthValidationSchemas } from './auth.validation';
import { AuthControllers } from './auth.controller';
import { validateRequest } from '../../middlewares/validateRequest';

const router=express.Router();

router.post('/login',validateRequest(AuthValidationSchemas.loginValidationSchema),AuthControllers.loginUser)


export const AuthRoutes=router;