import { Injectable } from '@angular/core';

@Injectable()
export class UsuariosService {
  usuarios = [
  
    {id :1, nombre: 'Equipo Desktop', Placa: 'PCS-3515', Serie: 'MXJ042k'},
    {id: 2, nombre: 'Impresora', Placa: 'IMP-3513', Serie: 'BCNH5678'},
    {id: 3, nombre: 'Monitor', Placa: 'MON-6755', Serie: 'VK67HNB'},
    {id: 4, nombre: 'Perifericos', Placa: 'PER-4755', Serie: 'NN2333' },
    {id: 5, nombre: 'UPS',Placa: 'UPS-8988', Serie: 'RTYE34' },
    
    ];
  constructor() { }
  getUsuarios()  {
  return this.usuarios;
  }
  getUsuario(id: number) {
    return this.getUsuarios().find(usuario => usuario.id === id);

  }

}
