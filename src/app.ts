/* eslint-disable no-console */
import httpStatus from 'http-status';
// const express = require('express')
import cors from 'cors';
import express, { Application, NextFunction, Request, Response } from 'express';

import globalErrorHandler from './app/middlewares/globalErrorHandler';
import routes from './app/routes/index_route';

import cookieParser from 'cookie-parser';
import sendResponse from './app/share/sendResponse';

const app: Application = express();


app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', routes);

app.get('/', async (req: Request, res: Response) => {
 
  sendResponse(res, {
    success: true,
    message: 'Running the Pc Builder server',
    statusCode: 201,
    data: null,
  });

});

app.use(globalErrorHandler);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API Not Found',
      },
    ],
  });
  next();
});

export default app;
