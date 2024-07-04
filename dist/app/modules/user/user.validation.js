"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidationSchemas = void 0;
const zod_1 = require("zod");
const userSchemaValidation = zod_1.z.object({
    firstName: zod_1.z.string(),
    lastName: zod_1.z.string(),
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(5),
    isDeleted: zod_1.z.boolean()
});
exports.userValidationSchemas = {
    userSchemaValidation
};
