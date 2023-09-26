import express from 'express';
import { PCRouter } from '../modules/pc/pc.route';
import { cartRouter } from '../modules/productCart/productCart.route';
import { CategoryRouter } from '../modules/category/category.route';

const router = express.Router();

const modulesRoutes = [
  {
    path: '/pc',
    route: PCRouter,
  },
  {
    path: '/pc-cart',
    route: cartRouter,
  },
  {
    path: '/category',
    route: CategoryRouter,
  },
];

modulesRoutes.forEach(route => router.use(route.path, route.route));

export default router;
