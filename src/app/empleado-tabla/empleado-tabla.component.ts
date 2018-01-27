import { Component, OnInit, Input} from '@angular/core';
import { Empleado } from '../shared/models/empleado';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadoService } from '../shared/services/empleado.service'
import {MatTableDataSource} from '@angular/material';
@Component({
  selector: 'app-empleado-tabla',
  templateUrl: './empleado-tabla.component.html',
  styleUrls: ['./empleado-tabla.component.css']
})
export class EmpleadoTablaComponent implements OnInit {
  @Input()
  empleados: Empleado[];
  displayedColumns = ['nombre', 'apellido', 'edad', 'tipo', 'activo'];
 
   constructor(private empleadoservice:EmpleadoService,
               private routervariables:Router) { }
   
  ngOnInit() {
  this.empleadoservice.listar_empleados()
  .subscribe((datos)=>{
     // console.log('hay datos', datos.data);
    this.empleados=datos.data;
    });
  }


}
