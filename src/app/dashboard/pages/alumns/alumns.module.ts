import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnsComponent } from './alumns.component';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from 'src/app/shared/shared/shared.module';




@NgModule({
  declarations: [
    AlumnsComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    SharedModule
  ],
  exports: [AlumnsComponent]
})
export class AlumnsModule { }
