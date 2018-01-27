import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../shared/models/empleado';
import { EmpleadoService } from '../shared/services/empleado.service';

@Component({
  selector: 'app-detalle-empleado',
  templateUrl: './detalle-empleado.component.html',
  styleUrls: ['./detalle-empleado.component.css']
})

export class DetalleEmpleadoComponent implements OnInit {

  empleadodetalle:Empleado={};

  constructor(private routervariables:Router,
              private actividadempleado:ActivatedRoute,
              private servcioempleado:EmpleadoService) { 
                
              }


  ngOnInit() {
    this.actividadempleado.params
    .subscribe((parametros)=>{  //parametros =>es un objeto que contine el id q recibimos de la url
        this.servcioempleado.obtenerUnEmpleado(parametros.idempleado)//idempleado es el id del empleado segun el navegador
        .subscribe(
            (respuesta)=>{//respuesta exitosa   respuesta.data contien todos los datos
            this.empleadodetalle=respuesta.data;//luego el contenido se lo asignamos a la var global
            },(error)=>{//respuesta con errores
              console.log('tenemos un error',error);
            }
            
      );        
    });
  }
                 // EVENTOS DE CADA BOTON
                 
  eventoClickModificar(){
    //cuando se toca el boton modi se obtine el id y se lo manda
   this.routervariables.navigate(['rutaEditarEmpleado',this.empleadodetalle._id]);
  }
  eventoEliminar(){
    this.servcioempleado.eliminarEmpleado(this.empleadodetalle._id)
    .subscribe((respuesta)=>{
    ///  console.log('id de empleado',respuesta);
    this.routervariables.navigate(['rutaListaEmpleado']);
    });
  }
}


