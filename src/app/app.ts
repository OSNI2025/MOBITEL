import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Software-MOBITEL 1.0.0';
  protected subtitle = 'Angular 17 + Ionic 7 + Capacitor 5 + Tailwind CSS 3';
}
