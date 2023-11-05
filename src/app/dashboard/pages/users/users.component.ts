import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/data/Users';
import UsersService from './users.service';
import { MatDialog } from '@angular/material/dialog';
import { UsersDialogComponent } from './components/users-dialog/users-dialog.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  users:Observable<User[]>;

  constructor(
    private userService: UsersService,
    private matDialog: MatDialog,
    private router : Router
    ) {
    this.users = this.userService.getUsers$();
  }

  columns: string[]= ['id', 'name', 'lastname', 'email', 'actions'];

  userCreate(): void {
    this.matDialog.open(UsersDialogComponent).afterClosed().subscribe({
      next: (v) => {
        if(v) {
          let newId = new Date().getTime().toString();
          let token = crypto.randomUUID();
          
        this.users = this.userService.createUser$({
          id: newId,
          name: v.name,
          lastname: v.lastname,
          username: v.username,
          email:v.email,
          password: v.password,
          role: v.role,
          token: token,
        });
        }
      }
    })
  }

  userDetail(userId: string): void {
    this.router.navigate(['dashboard', 'users', 'details', userId]);
  }

  userEdit(user: User): void {
    this.matDialog.open(UsersDialogComponent, {
      data: user
    }).afterClosed().subscribe({
      next: (v) => {
        this.users = this.userService.editUser$(user.id, v);
      }
    })
  }

  userDelete(userId: string): void {
    this.users = this.userService.deleteUser$(userId);
  }

}