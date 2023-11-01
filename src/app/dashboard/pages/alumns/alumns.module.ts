import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnsComponent } from './alumns.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AlumnsDialgoComponent } from './components/alumns-dialgo/alumns-dialgo.component';
import { AlumnDetailComponent } from './components/alumn-detail/alumn-detail.component';
import { AlumnsRoutingModule } from './alums-routing.module';




@NgModule({
  declarations: [
    AlumnsComponent,
    AlumnsDialgoComponent,
    AlumnDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [AlumnsComponent]
})
export class AlumnsModule { }
