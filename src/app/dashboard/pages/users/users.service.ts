import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from 'src/data/Users';

@Injectable({
  providedIn: 'root',
})
export default class UsersService {
  users: User[] = [
    {
      id: '1',
      name: 'Usuario1',
      lastname: 'Prueba1',
      username: 'user1',
      email: 'usuario1@test.com',
      password: 'pass1'
    },
    {
      id: '2',
      name: 'Usuario2',
      lastname: 'Prueba2',
      username: 'user2',
      email: 'usuario2@test.com',
      password: 'pass2'
    },
    {
      id: '3',
      name: 'Usuario3',
      lastname: 'Prueba3',
      username: 'user3',
      email: 'usuario3@test.com',
      password: 'pass3'
    },
    {
      id: '4',
      name: 'Usuario4',
      lastname: 'Prueba4',
      username: 'user4',
      email: 'usuario4@test.com',
      password: 'pass4'
    },
  ];

  getUser(userId: string): User | undefined {
    return this.users.find(u => u.id == userId);
  }

  getUsers$(): Observable<User[]> {
    return of(this.users);
  }

  createUser$(newUser: User): Observable<User[]> {
    this.users.push(newUser);
    return of([...this.users]);
  }

  editUser$(userId: string, payload: User): Observable<User[]> {
    return of(
      (this.users = this.users.map((user) => {
        if (user.id == userId) {
          return {
            ...user,
            ...payload,
          };
        } else {
          return user;
        }
      }))
    );
  }

  deleteUser$(userId: string): Observable<User[]> {
    return of(this.users = this.users.filter(u => u.id != userId));
  }

}
