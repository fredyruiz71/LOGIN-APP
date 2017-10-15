import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { RouterModule, Routes } from '@angular/router';
import {UsuariosService } from './servicios/usuarios.service';
import { UsuarioComponent } from './usuario/usuario.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LoginGuard } from './login.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShowofficialComponent } from './showofficial/showofficial.component';
//import { MdButtonModule, MdMenuModule, MdCardModule, MdToolbarModule, MdIconModule } from '@angular/material';



const routes: Routes = [
  {path: 'login' , component: LoginComponent},
  {path: 'usuarios' , component: UsuariosComponent,canActivate: [LoginGuard]},
  {path: 'usuarios/:id' , component: UsuarioComponent, canActivate: [LoginGuard]},
  {path: 'showofficial' , component: ShowofficialComponent, canActivate: [LoginGuard]},
];

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    UsuarioComponent,
    LoginComponent,
    ShowofficialComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    //MdButtonModule,
    //MdMenuModule,
    //MdCardModule,
    //MdToolbarModule,
    //MdIconModule





  ],
  providers: [UsuariosService, LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
