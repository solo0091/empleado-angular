import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleado';
import { Observable } from 'rxjs/Observable';

import { HttpClient } from '@angular/common/http';

@Injectable() 
export class EmpleadoService {

 // inyeccion de dependencias
    constructor(private httpClient:HttpClient) {
    }

   listar_empleados():Observable<any> {
    return this.httpClient.get('http://localhost:8080/usuarios');
   }
  //mandamos un observable con todos los valores, y lo obtenemos atravez de una direccion o ser
   obtenerUnEmpleado(id:any): Observable<any> {
    return this.httpClient.get('http://localhost:8080/usuarios/'+id);
   }
   crearEmpleado(empleadocrear:any){
    return this.httpClient.post('http://localhost:8080/usuarios/', empleadocrear);
   }
   editarEmpleado(id:any,empleadoeditar:any){
    return this.httpClient.put('http://localhost:8080/usuarios/'+id,empleadoeditar);

   }
   eliminarEmpleado(id:any){
    return this.httpClient.delete('http://localhost:8080/usuarios/'+id);
   }
}

