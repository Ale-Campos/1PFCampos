import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnsComponent } from './alumns.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';




@NgModule({
  declarations: [
    AlumnsComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [AlumnsComponent]
})
export class AlumnsModule { }
