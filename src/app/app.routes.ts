import { Routes } from '@angular/router';
import { MainApp } from './pages/main-app/main-app';
import { LoginPage } from './pages/login.page/login.page';
import { authGuard } from './core/auth-guard';

export const routes: Routes = [
  {
    path: '',
    title: '',
    component: MainApp,
    canActivate: [authGuard],
  },
  {
    path: 'login',
    title: 'Login',
    component: LoginPage
  },
];
