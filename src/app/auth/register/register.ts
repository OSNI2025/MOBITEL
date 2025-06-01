import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  imports: [],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register implements OnInit {
  // Aquí puedes definir las propiedades y métodos necesarios para el componente de registro
  constructor() { }

  ngOnInit(): void {
    // Lógica de inicialización si es necesaria
  }

  // Método para manejar el envío del formulario de registro
  onSubmit(form: any): void {
    // Lógica para manejar el registro de usuario
    console.log('Formulario de registro enviado', form);
  }

}
