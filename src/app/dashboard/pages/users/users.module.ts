import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UsersDialogComponent } from './components/users-dialog/users-dialog.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';



@NgModule({
  declarations: [
    UsersComponent,
    UsersTableComponent,
    UsersDialogComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    UsersComponent
  ]
})
export class UsersModule { }
