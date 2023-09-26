
import ApiError from '../../errors/ApiError';
import { IPC } from './pc.interface';
import { PC } from './pc.model';

const createPcServicesFromDb = async (PCData: IPC): Promise<IPC | null> => {
  // console.log(PC, 'from services');

  const createdPC = await PC.create(PCData);
  if (!createdPC) {
    throw new ApiError(400, 'Failed to create new PC');
  }
  return createdPC;
  // return null
};

const getSinglePcFromDb = async (id: string): Promise<IPC | null> => {
  const result = await PC.findById(id);

  return result;
};
const getByCategoryFromDb = async (category: string | undefined): Promise<IPC[] | null> => {
  const result = await PC.find({ category: category });
  return result;
};

const deletePCFromDb = async (id: string): Promise<IPC | null> => {
  const result = await PC.findByIdAndDelete(id);

  return result;
};

export const PCService = {
  createPcServicesFromDb,
  getSinglePcFromDb,
  deletePCFromDb,
  getByCategoryFromDb,
};
