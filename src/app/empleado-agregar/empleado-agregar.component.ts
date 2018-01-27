import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../shared/services/empleado.service';
import { Empleado  } from '../shared/models/empleado';
import { Router } from '@angular/router';


@Component({
  selector: 'app-empleado-agregar',
  templateUrl: './empleado-agregar.component.html',
  styleUrls: ['./empleado-agregar.component.css']
})
export class EmpleadoAgregarComponent implements OnInit {
  
  crearEmpleado:Empleado={};
   
  constructor( private serviciempleado:EmpleadoService,
               private routerEmpleado: Router
              ) { }

  ngOnInit() {//se executa de forma automatica cuando se llama al componente
  }
  
  guardarEmpleado(){
  //  empleadoaguardar = {"nombre":this.crearEmpleado.nombre};
    //console.log("crear emple",this.crearEmpleado);
      this.serviciempleado.crearEmpleado(this.crearEmpleado)//la var crearempleado ya tiene los datos
      .subscribe((respuesta)=>{
      //  console.log("respuesta del servidor ",respuesta);
        this.routerEmpleado.navigate(['rutaListaEmpleado']);
      })
  }
 
}
//quien me proporciona_servicio. que_metodo_utilizo_del _servicio(que le mando)
  //.subscribe(( que dato me manda))


