import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }from '@angular/forms';  
import { AppComponent } from './app.component';
import { MatFormFieldModule } from '@angular/material/form-field';
// Importing Forms and HTTP Module
import { RouterModule, Routes } from '@angular/router';
import { EmpleadoService } from './shared/services/empleado.service'
import { HttpClientModule } from '@angular/common/Http';
import { HttpModule } from '@angular/http';
import { MaterialModule } from './material/material.module';
// importing @angular/material and @angular/animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListaEmpleadoComponent } from './lista-empleado/lista-empleado.component';
import { ItemEmpleadoComponent } from './item-empleado/item-empleado.component';
import { EmpleadoAgregarComponent } from './empleado-agregar/empleado-agregar.component';
import { EmpleadoEditarComponent } from './empleado-editar/empleado-editar.component';
import { AppRoutingModule } from './app-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { EmpleadoTablaComponent } from './empleado-tabla/empleado-tabla.component';
import { DetalleEmpleadoComponent } from './detalle-empleado/detalle-empleado.component';
import { TestDirectivasComponent } from './test-directivas/test-directivas.component';
import { SergioDirectiveDirective } from './sergio-directive.directive';
import { sinEspacios }from './validaciones.directive';
import { ItemListEmpleadoComponent } from './item-list-empleado/item-list-empleado.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaEmpleadoComponent,
    ItemEmpleadoComponent,
    EmpleadoAgregarComponent,
    EmpleadoEditarComponent,
    InicioComponent,
    sinEspacios,
  
    EmpleadoTablaComponent,
    DetalleEmpleadoComponent,
    TestDirectivasComponent,
    SergioDirectiveDirective,
    ItemListEmpleadoComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatFormFieldModule,
    AppRoutingModule
    
  ],
  providers: [EmpleadoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
