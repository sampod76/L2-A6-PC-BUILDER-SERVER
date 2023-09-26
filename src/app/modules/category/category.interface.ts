import { Model } from 'mongoose';

export type ICategory = {
  category: string;
  imageLink: string;
  subCategory?: string;
};

export type CategoryModel = Model<ICategory>;
