import * as express from 'express';
import { Controller } from './core/interfaces';
 
export default class App {
  app: express.Application;
  port: string | number;
 
  constructor(controllers: Controller[], port: string | number) {
    this.app = express();
    this.port = port;
 
    this.registerControllers(controllers);
  }
 
  private registerControllers(controllers: Controller[]) {
    controllers.forEach((controller) => {
      this.app.use('/api', controller.router);
    });
  }
 
  listen() {
    return this.app.listen(this.port, () => {
      console.log(`Listening at http://localhost:${this.port}/api`);
    });
  }
}
