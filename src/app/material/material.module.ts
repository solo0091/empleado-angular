import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from '@angular/material';
import {
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
    MatTableModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatOptionModule,
    MatSelectModule
  
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
    MatTableModule,
    MatListModule,
    MatIconModule,
    MatOptionModule,
    MatToolbarModule,
    MatDialogModule,
    MatSelectModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
    MatTableModule,
    MatListModule,
    MatIconModule,
    MatOptionModule,
    MatToolbarModule,
    MatDialogModule,
    MatSelectModule
  ],
  providers: [
  ],
  declarations: [],
})
export class MaterialModule { }