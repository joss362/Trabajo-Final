import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { AppRoutingModule } from './app-routing.module'; // Asegúrate de que está importado el módulo de rutas
import { RouterModule } from '@angular/router';  // Importa RouterModule para habilitar el <router-outlet>

@NgModule({
  declarations: [
    AppComponent,
    RegistrarseComponent,  // Declarar el componente Registrarse
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  // Importa el módulo de rutas personalizado
    RouterModule,  // Asegúrate de importar RouterModule aquí
  ],
  providers: [],
  bootstrap: [AppComponent]  // El componente raíz que se cargará
})
export class AppModule { }
