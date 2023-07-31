import { Routes } from '@angular/router';
import { HomeComponent } from '../../home/home.component';
import { NgModule } from '@angular/core';

export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];
