import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login implements OnInit {
  // Aquí puedes definir las propiedades y métodos necesarios para el componente de login
  constructor() { }

  ngOnInit(): void {
    // Lógica de inicialización si es necesaria
  }

  // Método para manejar el envío del formulario de login
  onSubmit(form: any): void {
    // Lógica para manejar el inicio de sesión
    console.log('Formulario enviado', form);
  }

}
