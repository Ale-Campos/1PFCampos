import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnsComponent } from './alumns.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AlumnsDialgoComponent } from './components/alumns-dialgo/alumns-dialgo.component';




@NgModule({
  declarations: [
    AlumnsComponent,
    AlumnsDialgoComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [AlumnsComponent]
})
export class AlumnsModule { }
