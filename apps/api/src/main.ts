import { Router } from 'express';
import App from './app/app';
import {
  ItemsController,
  GetItemRepository,
  SearchItemsRepository
} from './app/modules/items';

const router = Router();
const port = process.env.port || 3333;
const app = new App(
  [
    new ItemsController(
      router,
      new SearchItemsRepository(),
      new GetItemRepository(),
    ),
  ],
  port
);
 
const server = app.listen();
server.on('error', console.error);
