import { Schema, model } from 'mongoose';
import { ICategory } from '../category/category.interface';


const CategorySchema = new Schema<ICategory>(
  {
    category: { type: String, required: true },
    imageLink: { type: String, required: true },
    subCategory: { type: String, required: true },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Category = model<ICategory>('Category', CategorySchema);
