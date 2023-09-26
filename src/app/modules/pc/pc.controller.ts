import { Request, Response } from 'express';
import catchAsync from '../../share/catchAsync';
import sendResponse from '../../share/sendResponse';
import { IPC } from './pc.interface';
import { PC } from './pc.model';
import { PCService } from './pc.service';

const createPc = catchAsync(async (req: Request, res: Response) => {
  const result = await PCService.createPcServicesFromDb(req.body);
  if (result) {
    sendResponse(res, {
      success: true,
      message: 'successfully create PC',
      statusCode: 200,
      data: result,
    });
  }
});

const getAllPc = catchAsync(async (req: Request, res: Response) => {
  const data = await PC.find({});
  sendResponse(res, {
    success: true,
    message: 'successfully get PCs',
    statusCode: 200,
    data: data,
  });
});

const getSinglePc = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await PCService.getSinglePcFromDb(id);
  sendResponse<IPC>(res, {
    statusCode: 200,
    success: true,
    message: 'PC recieved successfully !',
    data: result,
  });
});

const getByCategoryPC = catchAsync(async (req: Request, res: Response) => {
  const category = req.query.category
  const result = await PCService.getByCategoryFromDb(category as string);
  sendResponse<IPC[]>(res, {
    statusCode: 200,
    success: true,
    message: 'PC category successfully !',
    data: result,
  });
});

const deletePC = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await PCService.deletePCFromDb(id);
  sendResponse<IPC>(res, {
    statusCode: 200,
    success: true,
    message: 'PC deleted successfully !',
    data: result,
  });
});

export const PCController = {
  createPc,
  getAllPc,
  getSinglePc,
  deletePC,
  getByCategoryPC
};
