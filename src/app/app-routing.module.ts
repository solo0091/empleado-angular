import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ListaEmpleadoComponent } from './lista-empleado/lista-empleado.component';
import { EmpleadoAgregarComponent} from './empleado-agregar/empleado-agregar.component';
import { EmpleadoEditarComponent } from './empleado-editar/empleado-editar.component';
import { EmpleadoTablaComponent  } from './empleado-tabla/empleado-tabla.component';
import { DetalleEmpleadoComponent } from './detalle-empleado/detalle-empleado.component';
import { TestDirectivasComponent } from './test-directivas/test-directivas.component';
const appRoutes: Routes = [
    { path: '', 
      component: InicioComponent
    },
    { path: 'rutaAgregarEmpleado', 
      component: EmpleadoAgregarComponent
    },
    { path: 'rutaListaEmpleado', 
      component: ListaEmpleadoComponent
    },
    { path: 'rutaEditarEmpleado/:idempleado', 
      component: EmpleadoEditarComponent
    },
    { path: 'rutaTablaEmpleado', 
    component: EmpleadoTablaComponent
    },
    { path: 'rutaDetalleEmpleado/:idempleado', 
    component: DetalleEmpleadoComponent
    },
    { path: 'rutaDirectivas', 
    component: TestDirectivasComponent
    }
   
  ];
      
  @NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }