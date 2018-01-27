import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../shared/models/empleado';
import { EmpleadoService } from '../shared/services/empleado.service'

@Component({
  selector: 'app-lista-empleado',
  templateUrl: './lista-empleado.component.html',
  styleUrls: ['./lista-empleado.component.css']
})
export class ListaEmpleadoComponent implements OnInit {

  empleados: Empleado[];
  
  constructor(private empleadoservice:EmpleadoService, 
              private routervariables:Router){  }
  

  ngOnInit() {  //se executa de forma automatica cuando se llama al componente
      this.empleadoservice.listar_empleados()
      .subscribe((datos)=>{
      this.empleados=datos.data;
      });
  }
  
  recibirMensajeDelHijo(datoRecibido:string){
    console.log('tratando de recibir mensaje');
    console.log('dato recibido:', datoRecibido);
    //mandamos la ruta con el (el_componente,idempleado)
    this.routervariables.navigate(['rutaDetalleEmpleado',datoRecibido]);//ruta a la qe mandamos el datoRec..
  }

}
