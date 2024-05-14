import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaImagenComponent } from './lista-imagen/lista-imagen.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ListaImagenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tarea09Web';
}
