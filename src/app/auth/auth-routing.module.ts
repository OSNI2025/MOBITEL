import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './login/login'; // Asegúrate que la ruta sea correcta
import { Register } from './register/register'; // Asegúrate que la ruta sea correcta

const routes: Routes = [
  {
    path: 'login', // Ruta completa sería /auth/login
    component: Login
  },
  {
    path: 'register', // Ruta completa sería /auth/register
    component: Register
  },
  {
    path: '', // Ruta por defecto dentro de /auth, redirige a login
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }