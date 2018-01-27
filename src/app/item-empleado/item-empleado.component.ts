import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import { Empleado } from '../shared/models/empleado';

@Component({
  selector: 'app-item-empleado',
  templateUrl: './item-empleado.component.html',
  styleUrls: ['./item-empleado.component.css']
})
export class ItemEmpleadoComponent implements OnInit {

  @Input() //es una entrada que recibimos del padre
  datoempleado: Empleado;//dato qe nos manada el padre desde html=>[datoempleado]='empleado'
  color:string;

  @Output() //retorna una salida, mandamos un valor al padre
  salidaempleado:EventEmitter<any> = new EventEmitter<any>();


  constructor() { }
  ngOnInit() {//se executa de forma automatica cuando se llama al componente
  }
  
  eventoclick(){
    //cuando se toca el item se obtine el id y se lo manda

    if(this.datoempleado.activo==true){
      this.salidaempleado.emit(this.datoempleado._id);//ponemos el id en la var salidaempleado
                                                    // qe sera enviado al padre
     }
    
     this.color="No esta disponible";
  }
}
