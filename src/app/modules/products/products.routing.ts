import { Routes } from '@angular/router';
import * as path from 'path';
import { ProductsHomeComponent } from './page/products-home/products-home.component';

export const PRODUCTS_ROUTES: Routes = [
  {
    path: '',
    component: ProductsHomeComponent,
  },
];
