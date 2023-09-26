/* eslint-disable no-console */
import { Request, Response } from 'express';
import { CartService } from './productCart.service';
import catchAsync from '../../share/catchAsync';
import sendResponse from '../../share/sendResponse';
import { ICart } from './productCart.interface';
import { Cart } from './productCart.model';

const createCart = catchAsync(async (req: Request, res: Response) => {
  const { ...CartData } = req.body;
  console.log(CartData);
  const result = await CartService.createCart(CartData);

  if (result) {
    sendResponse<ICart>(res, {
      statusCode: 200,
      success: true,
      message: 'Cart created successfully!',
      data: result,
    });
  }
});

const getCart = catchAsync(async (req: Request, res: Response) => {
  console.log(req.query);
  const queryData = { user: req.query?.user, category: req.params?.category };
  const result = await Cart.findOne(queryData).populate('productName');
  if (result) {
    sendResponse<ICart>(res, {
      statusCode: 200,
      success: true,
      message: 'Cart created successfully!',
      data: result,
    });
  }
});

export const CartController = { createCart, getCart };
