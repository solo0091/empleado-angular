import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../shared/models/empleado';
import { EmpleadoService} from '../shared/services/empleado.service';

@Component({
  selector: 'app-empleado-editar',
  templateUrl: './empleado-editar.component.html',
  styleUrls: ['./empleado-editar.component.css']
})
export class EmpleadoEditarComponent implements OnInit {
  @Input()
   editarEmpleado:Empleado={};


  constructor(private routerVariablesEditar:Router,
              private actividadEmpleadoEditar:ActivatedRoute,//en la var activi nos llega el id
              private servcioEmpleadoEditar:EmpleadoService ) { }

  ngOnInit() {//se executa de forma automatica cuando se llama al componente
    this.actividadEmpleadoEditar.params
    .subscribe((parametros)=>{  //recibimos el objet con el id. desde de la url
      //parametros => es un objeto que contine el id
      console.log('esto es el parametro de editar',parametros);
        this.servcioEmpleadoEditar.obtenerUnEmpleado(parametros.idempleado)
        .subscribe((respuesta)=>{
        this.editarEmpleado=respuesta.data;
        });
    });
  }
  /*
  editarusuario(edadpersona: any){
    console.log('recibiendo datos de: ', edadpersona);
  }
*/
   guardarNuevosCambios(){
     this.servcioEmpleadoEditar.editarEmpleado(this.editarEmpleado._id,this.editarEmpleado)
     .subscribe((respuesta)=>{
      console.log('recibiendo respuesta: ', respuesta);
      this.routerVariablesEditar.navigate(['rutaListaEmpleado']);
     });
}
}
