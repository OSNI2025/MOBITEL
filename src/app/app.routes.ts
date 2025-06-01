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

  // Ejemplo de ruta principal o redirección si es necesario
  // {
  //   path: '',
  //   redirectTo: '/home', // o alguna otra ruta por defecto
  //   pathMatch: 'full'
  // },
  // {
  //   path: '**', // Wildcard route para páginas no encontradas
  //   redirectTo: '/home' // o a una página 404
  // }
];
