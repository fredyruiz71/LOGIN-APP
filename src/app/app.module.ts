import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { RouterModule, Routes } from '@angular/router';
import {UsuariosService } from './servicios/usuarios.service';
import { UsuarioComponent } from './usuario/usuario.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { LoginGuard } from './login.guard';



const routes: Routes = [
  {path: 'login' , component: LoginComponent},
  {path: 'usuarios' , component: UsuariosComponent},
  {path: 'usuarios/:id' , component: UsuarioComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    UsuarioComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UsuariosService, LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
