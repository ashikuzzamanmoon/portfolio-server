"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = void 0;
const mongoose_1 = require("mongoose");
const projectsSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true
    },
    des: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    iconLists: {
        type: [String],
    },
    link: {
        type: String,
        required: true
    },
    heading: {
        type: String,
        required: true
    },
    clientSiteCode: {
        type: String,
        required: true
    },
    backendSiteCode: {
        type: String,
        required: true
    },
    techStack: {
        type: [String],
        required: true
    }
}, {
    timestamps: true
});
exports.Project = (0, mongoose_1.model)('Project', projectsSchema);
