import {
  Request,
  Response,
  Router
} from 'express';

import { Controller } from '../../core/interfaces';
import {
  GetItemRepository,
  SearchItemsRepository
} from './repositories';
 
export class ItemsController implements Controller {

  get router(): Router {
    return this._router;
  }
  
  constructor(
    private _router: Router,
    private searchItemsRepo: SearchItemsRepository,
    private getItemRepo: GetItemRepository
  ) {
    this.registerRoutes();
  }

  registerRoutes() {
    this.router.get('/items', this.search);
    this.router.get('/items/:id', this.getItem);
  }

  search = async (req: Request, resp: Response) => {
    const query = req.query.q as string;
  
    try {
      const result = await this.searchItemsRepo.execute(query);
      resp.send(result);
  
    } catch (error) {
      resp.status(error.response?.status ?? 404).send({
        message: error.response?.data?.message ?? error.message
      });
    }
  }

  getItem = async (req: Request, resp: Response) => {
    const { id } = req.params;
  
    try {
      const result = await this.getItemRepo.execute(id);
      resp.send(result);
  
    } catch (error) {
      resp.status(404).send({
        message: `Item id ${id} not found`
      });
    }
  }
}
