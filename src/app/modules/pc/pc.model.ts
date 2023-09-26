import { Schema, model } from 'mongoose';
import { IPC, ImainFeatures } from './pc.interface';

const mainFeaturesSchema = new Schema<ImainFeatures>({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  specification: { type: String, required: true },
  Port: { type: String, required: true },
  voltage: { type: String, required: true },
});

const PCSchema = new Schema<IPC>({
  image: { type: String, required: true },
  productName: { type: String, required: true },
  category: { type: String, required: true },
  status: { type: String, enum: ['In Stock', 'Out of Stock'], required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  mainFeatures: { type: mainFeaturesSchema, required: true },
  mainRating: { type: Number, required: true },
  averageRating: { type: Number, required: true },
  reviews: { type: [String], required: true },
},
{
  timestamps:true,
  toJSON:{
    virtuals:true
  }            
});

export const PC = model<IPC>('Pc-component', PCSchema);
