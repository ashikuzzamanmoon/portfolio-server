import express from 'express';
import { validateRequest } from '../../middlewares/validateRequest';
import auth from '../../middlewares/auth';
import { BlogControllers } from './blog.controller';

const router=express.Router();

router.post('/',auth(),BlogControllers.createBlog)
router.get('/',BlogControllers.getAllBlogs)
router.get('/blog/:blogId',BlogControllers.getBlogById)
router.patch('/:blogId',auth(),BlogControllers.updateBlog)
router.delete('/:blogId',auth(),BlogControllers.softDeleteBlog)


export const BlogRoutes=router;