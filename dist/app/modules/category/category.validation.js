"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MySchema = void 0;
const zod_1 = require("zod");
exports.MySchema = zod_1.z.object({
    category: zod_1.z.string().min(1),
    imageLink: zod_1.z.string().min(1),
    subCategory: zod_1.z.string().min(1),
});
