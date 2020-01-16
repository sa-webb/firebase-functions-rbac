import { Application } from 'express';
import { create, all, get, patch, remove } from './controller';
import { isAuthenticated } from '../auth/authenticated';
import { isAuthorized } from '../auth/authorized';

export function routesConfig(app: Application) {
  app.post(
    '/users',
    isAuthenticated,
    isAuthorized({ hasRole: ['admin', 'manager'] }),
    create
  );
  app.get('/users', [
    isAuthenticated,
    isAuthorized({ hasRole: ['admin', 'manager'] }),
    all
  ]);
  // get :id user
  app.get('/users/:id', [
    isAuthenticated,
    isAuthorized({ hasRole: ['admin', 'manager'], allowSameUser: true }),
    get
  ]);
  // updates :id user
  app.patch('/users/:id', [
    isAuthenticated,
    isAuthorized({ hasRole: ['admin', 'manager'], allowSameUser: true }),
    patch
  ]);
  // deletes :id user
  app.delete('/users/:id', [
    isAuthenticated,
    isAuthorized({ hasRole: ['admin', 'manager'] }),
    remove
  ]);
}
