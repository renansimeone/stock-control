import { Routes } from '@angular/router';
import { HomeComponent } from '../../home/home.component';
import { NgModule } from '@angular/core';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';

export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    component: DashboardHomeComponent,
  },
];
