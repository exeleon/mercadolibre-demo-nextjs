import { Router } from 'express';

export interface Controller {
  readonly router: Router;
  
  registerRoutes(): void;
}
