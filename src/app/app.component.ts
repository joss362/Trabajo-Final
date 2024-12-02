import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // Importar RouterModule si es necesario

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,  // Esto marca el componente como independiente
  imports: [RouterModule]  // Si el componente es independiente, se deben declarar los módulos requeridos aquí
})
export class AppComponent {
  title = 'mi-aplicacion';
}
