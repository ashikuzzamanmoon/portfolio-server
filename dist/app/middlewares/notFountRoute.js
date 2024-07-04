"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFountRoute = void 0;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const notFountRoute = (req, res, next) => {
    return res.status(404).json({
        success: false,
        message: 'Route not found!',
        err: ''
    });
};
exports.notFountRoute = notFountRoute;
