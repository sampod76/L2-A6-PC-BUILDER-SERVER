/* eslint-disable no-console */
import mongoose from 'mongoose';

import { Server } from 'http';
import app from './app';
import config from './app/config';


process.on('uncaughtException', err => {
  console.log('UnCaught rejection is detected from serve.ts', err);
  process.exit(1);
});

let server: Server;


async function run() {
  try {
    await mongoose.connect(config.data_url as string, {
      dbName: 'pc-Build',
    });

    console.log('Database Connected successfully ');

    server = app.listen(config.port, () => {
      console.log(`server app listening on port ${config.port}`);
    });
  } catch (error) {
    console.log('failed to connect ');
  }

  process.on('unhandledRejection', error => {
  
    if (server) {
      server.close(() => {
        console.log(error);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}

process.on('SIGTERM', () => {
  console.log('SIGTERM is received ');
  if (server) {
    server.close();
  }
});


run();
