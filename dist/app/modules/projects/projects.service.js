"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const projects_model_1 = require("./projects.model");
const createProject = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield projects_model_1.Project.create(payload);
    return result;
});
const getAllProjects = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield projects_model_1.Project.find();
    return result;
});
const getSingleProject = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield projects_model_1.Project.findById(id);
    return result;
});
// delete blog 
const softDeleteProjectByIdFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const blog = yield projects_model_1.Project.findById(id);
    if (!blog) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Project not exist!");
    }
    const result = yield projects_model_1.Project.findByIdAndUpdate(id, { isDeleted: true }, {
        new: true,
        runValidators: true,
    });
    return result;
});
exports.ProjectServices = {
    createProject,
    getAllProjects,
    getSingleProject,
    softDeleteProjectByIdFromDb
};
