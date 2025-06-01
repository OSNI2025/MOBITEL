import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'auth', 
    pathMatch: 'full'
  },
  {
    path: 'auth', // Este será el prefijo para las rutas de autenticación (ej: /auth/login)
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  }
];
