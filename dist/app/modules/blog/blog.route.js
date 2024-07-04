"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middlewares/auth"));
const blog_controller_1 = require("./blog.controller");
const router = express_1.default.Router();
router.post('/', (0, auth_1.default)(), blog_controller_1.BlogControllers.createBlog);
router.get('/', blog_controller_1.BlogControllers.getAllBlogs);
router.get('/blog/:blogId', blog_controller_1.BlogControllers.getBlogById);
router.patch('/:blogId', (0, auth_1.default)(), blog_controller_1.BlogControllers.updateBlog);
router.delete('/:blogId', (0, auth_1.default)(), blog_controller_1.BlogControllers.softDeleteBlog);
exports.BlogRoutes = router;
