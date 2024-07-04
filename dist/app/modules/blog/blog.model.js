"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blog = void 0;
const mongoose_1 = require("mongoose");
const blogSchema = new mongoose_1.Schema({
    authorName: {
        type: String,
        required: true
    },
    quote: {
        type: String,
        required: true
    },
    file: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});
exports.Blog = (0, mongoose_1.model)('Blog', blogSchema);
