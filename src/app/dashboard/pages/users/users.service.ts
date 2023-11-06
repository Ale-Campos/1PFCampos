import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, of } from 'rxjs';
import { User } from 'src/data/Users';
import { environments } from 'src/environments/environment.local';

@Injectable({
  providedIn: 'root',
})
export default class UsersService {
  private _users$ =  new BehaviorSubject<User[]>([]);
  public users$ = this._users$.asObservable();

  private _user$ = new BehaviorSubject<User | null>(null);
  public user$ = this._user$.asObservable();

  constructor(private httpCliente: HttpClient){}

  getUser(userId: string): Observable<User | null> {
    this.httpCliente.get<User[]>(`${environments.baseUrl}/users?id=${userId}`).subscribe({
      next: (response) => {
        this._user$.next(response[0]);        
      },
      error: (error) => {
        this._user$.next(null); 
      }
    });

    return this.user$;
  }

  getUsers$(): Observable<User[]> {
    
    this.httpCliente.get<User[]>(`${environments.baseUrl}/users`).subscribe({
      next: (response) => {
        this._users$.next(response);        
      },
      error: (error) => {
        this._users$.next([]); 
      }
    });
    return this.users$;
  }

  createUser$(newUser: User): Observable<User[]> {
    
    this.httpCliente.post(`${environments.baseUrl}/users`, {
      email: newUser.email,
      id: newUser.id,
      lastname: newUser.lastname,
      name: newUser.name,
      password: newUser.password,
      role: newUser.role,
      token: newUser.token,
      username: newUser.name,
    }).subscribe({
      next: () => {
        this.getUsers$();
      },
      error: () => {
        alert("Error de conexión");
      }
    });
    return this.users$;
  }

  editUser$(userId: string, payload: User): Observable<User[]> {
    this.httpCliente.put(`${environments.baseUrl}/users/${userId}`, {
      email: payload.email,
      id: payload.id,
      lastname: payload.lastname,
      name: payload.name,
      password: payload.password,
      role: payload.role,
      token: payload.token,
      username: payload.name,
    }).subscribe({
      next: () => {
        this.getUsers$();
      },
      error: () => {
        alert("Error de conexión")
      }
    });
    
    return this.users$;
  }

  deleteUser$(userId: string): Observable<User[]> {
    this.httpCliente.delete(`${environments.baseUrl}/users/${userId}`)
    .subscribe({
      next: () => {
        this.getUsers$();
      },
      error: () => {
        alert("Error de conexión");
      }
    });
    return this.users$;
  }

}
