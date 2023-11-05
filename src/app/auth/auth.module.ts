import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { LoginModule } from './pages/login/login.module';
import { SharedModule } from '../shared/shared.module';
import { RegisterModule } from './pages/register/register.module';
import { AuthRoutingModule } from './auth-routing.module';



@NgModule({
  declarations: [
    AuthComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    LoginModule,
    RegisterModule,
    AuthRoutingModule
  ],
  exports: [AuthComponent]
})
export class AuthModule { }
