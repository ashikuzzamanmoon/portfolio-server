"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AppError_1 = __importDefault(require("../errors/AppError"));
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const globalErrorhandler = (err, req, res, next) => {
    let statusCode = 500;
    let message = "Something went wrong";
    if (err instanceof AppError_1.default) {
        statusCode = err.statusCode;
        message = err.message;
    }
    return res.status(statusCode).json({
        success: false,
        message,
        err
    });
};
exports.default = globalErrorhandler;
