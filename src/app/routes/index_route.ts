import express from 'express';

//https://docs.google.com/document/d/1gTsTpFvhfZB-2y0_BbZQVzmbG3YwsZwPrwAbsYqpOzM/edit
const router = express.Router();

const moduleRoutes = [
  // {
  //   path: '/users',
  //   route: UserRoute,
  // },

  {
    path: '/notification',
    route: NotificationRoute,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
