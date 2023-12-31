import { ICart } from './productCart.interface';
import { Cart } from './productCart.model';

const createCart = async (payload: ICart): Promise<ICart> => {
  const cart = await Cart.create(payload);

  return cart;
};

const getSingleCart = async (queryData: {
  email: string | undefined;
  category: string | undefined;
})   => {
  const result = await Cart.findOne(queryData);
  return result;
};

export const CartService = {
  createCart,
  getSingleCart,
};
