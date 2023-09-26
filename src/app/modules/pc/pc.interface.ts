import { Model } from 'mongoose';

export type ImainFeatures = {
  brand: string;
  model: string;
  specification: string;
  Port: string;
  voltage: string;
 
};


export type IPC = {
  image: string;
  productName: string;
  category: string;
  status: 'In Stock' | 'Out of Stock';
  price: number;
  description: string;
  mainFeatures: ImainFeatures;
  mainRating: number;
  averageRating: number;
  reviews: string[];
};

export type PcModel = Model<IPC>;
