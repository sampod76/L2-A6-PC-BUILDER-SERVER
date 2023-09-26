import { z } from 'zod';

const mainFeaturesSchema = z.object({
  brand: z.string(),
  model: z.string(),
  specification: z.string(),
  Port: z.string(),
  voltage: z.string(),
 
});

const createPcZodSchema = z.object({
  body: z.object({
    image: z.string({
      required_error: 'image is required',
    }),
    productName: z.string({
      required_error: 'productName is required',
    }),
    category: z.enum([
      'CPU',
      'Motherboard',
      'RAM',
      'Power Supply Unit',
      'Storage Device',
      'Monitor',
    ]),
    status: z.enum(['In Stock', 'Out of Stock'], {
      required_error: 'status is required',
    }),
    price: z.number({
      required_error: 'price is required',
    }),
    description: z.string({
      required_error: 'description is required',
    }),
    mainFeatures: mainFeaturesSchema,
    mainRating: z.number({
      required_error: 'mainRating is required',
    }),
    averageRating: z.number({
      required_error: 'averageRating is required',
    }),
    reviews: z.array(
      z.string({
        required_error: 'review is required',
      })
    ),
  }),
});



export const PCValidation = {
  createPcZodSchema,

};
