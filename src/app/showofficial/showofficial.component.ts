import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  UsuariosService } from '../servicios/usuarios.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-showofficial',
  templateUrl: './showofficial.component.html',
  styleUrls: ['./showofficial.component.css']
})
export class ShowofficialComponent implements OnInit {
showofficial: any;

  constructor(private route: ActivatedRoute, private usuariosService: UsuariosService) { }

  ngOnInit() {
    const usuarios = this.route.snapshot.paramMap.get('usuarios');
    this.showofficial = this.usuariosService.getUsuario(Number(usuarios));{
    //this.router(['/showofficial']);
    }
  }

}
