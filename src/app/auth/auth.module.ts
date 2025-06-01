import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Importa RouterModule si tus componentes usan routerLink, etc.
import { ReactiveFormsModule } from '@angular/forms'; // Importa si usas Reactive Forms en login/register

import { AuthRoutingModule } from './auth-routing.module';
import { Login } from './login/login'; // Asegúrate que la ruta sea correcta
import { Register } from './register/register'; // Asegúrate que la ruta sea correcta

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    RouterModule,
    ReactiveFormsModule 
  ]
})
export class AuthModule { }