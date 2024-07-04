"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectValidationSchemas = void 0;
const zod_1 = require("zod");
const projectSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string(),
        heading: zod_1.z.string(),
        clientSiteCode: zod_1.z.string(),
        backendSiteCode: zod_1.z.string(),
        techStack: zod_1.z.array(zod_1.z.string()),
        des: zod_1.z.string(),
        img: zod_1.z.string(),
        iconLists: zod_1.z.array(zod_1.z.string()).optional(),
        link: zod_1.z.string()
    })
});
exports.projectValidationSchemas = {
    projectSchema
};
