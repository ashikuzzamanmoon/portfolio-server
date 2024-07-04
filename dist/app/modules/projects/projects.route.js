"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = require("../../middlewares/validateRequest");
const projects_controller_1 = require("./projects.controller");
const projects_validation_1 = require("./projects.validation");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const router = express_1.default.Router();
router.post('/', (0, auth_1.default)(), (0, validateRequest_1.validateRequest)(projects_validation_1.projectValidationSchemas.projectSchema), projects_controller_1.ProjectControllers.createProject);
router.get('/', projects_controller_1.ProjectControllers.getAllProjects);
router.get('/:id', projects_controller_1.ProjectControllers.getSingleProject);
router.delete('/:projectId', (0, auth_1.default)(), projects_controller_1.ProjectControllers.softDeleteProject);
exports.ProjectsRoutes = router;
