import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/data/Users';
import UsersService from './users.service';
import { MatDialog } from '@angular/material/dialog';
import { UsersDialogComponent } from './components/users-dialog/users-dialog.component';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  users:Observable<User[]>;

  constructor(
    private userService: UsersService,
    private matDialog: MatDialog    
    ) {
    this.users = this.userService.getUsers$();
  }

  columns: string[]= ['id', 'name', 'lastname', 'email', 'actions'];

  userCreate(): void {
    this.matDialog.open(UsersDialogComponent).afterClosed().subscribe({
      next: (v) => {
        let newId = new Date().getTime().toString();
        this.users = this.userService.createUser$({
          id: newId,
          name: v.name,
          lastname: v.lastname,
          username: v.username,
          email:v.email,
        });
      }
    })
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