import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { Empleado } from '../shared/models/empleado';


@Component({
  selector: 'app-item-list-empleado',
  templateUrl: './item-list-empleado.component.html',
  styleUrls: ['./item-list-empleado.component.css']
})
export class ItemListEmpleadoComponent implements OnInit {
  @Input()
  itemListEmpleado:Empleado;
  
  @Output()
  salidaItemEmple:EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  elementoSeleccionado()
  {
    this.salidaItemEmple.emit(this.itemListEmpleado._id);
  }

}
