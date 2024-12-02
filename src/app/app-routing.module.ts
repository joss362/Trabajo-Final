import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarseComponent } from './registrarse/registrarse.component'; // Asegúrate de que RegistrarseComponent está importado

// Definir las rutas
const routes: Routes = [
  { path: '', redirectTo: '/bienvenido', pathMatch: 'full' }, // Ruta predeterminada
  { path: 'registrarse', component: RegistrarseComponent },  // Ruta para el componente Registrarse
  { path: '**', redirectTo: '/bienvenido' }  // Ruta comodín para manejar errores de ruta
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Configuración de rutas
  exports: [RouterModule]  // Exportar RouterModule para usarlo en el módulo principal
})
export class AppRoutingModule { }
