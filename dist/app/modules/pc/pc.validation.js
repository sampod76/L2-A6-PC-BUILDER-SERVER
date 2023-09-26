"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PCValidation = void 0;
const zod_1 = require("zod");
const mainFeaturesSchema = zod_1.z.object({
    brand: zod_1.z.string(),
    model: zod_1.z.string(),
    specification: zod_1.z.string(),
    Port: zod_1.z.string(),
    voltage: zod_1.z.string(),
});
const createPcZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        image: zod_1.z.string({
            required_error: 'image is required',
        }),
        productName: zod_1.z.string({
            required_error: 'productName is required',
        }),
        category: zod_1.z.enum([
            'CPU',
            'Motherboard',
            'RAM',
            'Power Supply Unit',
            'Storage Device',
            'Monitor',
        ]),
        status: zod_1.z.enum(['In Stock', 'Out of Stock'], {
            required_error: 'status is required',
        }),
        price: zod_1.z.number({
            required_error: 'price is required',
        }),
        description: zod_1.z.string({
            required_error: 'description is required',
        }),
        mainFeatures: mainFeaturesSchema,
        mainRating: zod_1.z.number({
            required_error: 'mainRating is required',
        }),
        averageRating: zod_1.z.number({
            required_error: 'averageRating is required',
        }),
        reviews: zod_1.z.array(zod_1.z.string({
            required_error: 'review is required',
        })),
    }),
});
exports.PCValidation = {
    createPcZodSchema,
};
