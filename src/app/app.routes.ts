import { Routes } from '@angular/router';
import { MainApp } from './pages/main-app/main-app';
import { LoginPage } from './pages/login.page/login.page';
import { authGuard } from './core/auth-guard';
import { inject } from '@angular/core';
import { AuthFacadeService } from './services/Facade/auth-facade-service';

export const routes: Routes = [
  {
    path: '',
    title: '',
    // component: MainApp,
    loadComponent: () => import('./pages/main-app/main-app').then(m => m.MainApp),
    canActivate: [authGuard],
    resolve: {
      channelsData: () => inject(AuthFacadeService).getLinkedChannels(),
    },
  },
  {
    path: 'login',
    title: 'Login',
    // component: LoginPage,
    loadComponent: () => import('./pages/login.page/login.page').then(m => m.LoginPage),
  },
];
