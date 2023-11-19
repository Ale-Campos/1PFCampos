import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { User } from 'src/data/Users';
import { environments } from 'src/environments/environment.local';
import { AuthActions } from '../store/auth/auth.actions';
import { selectAuthUser } from '../store/auth/auth.selector';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  public authUser$ = this.store.select(selectAuthUser);

  constructor(private httpCliente: HttpClient, private router: Router, private store: Store) {}

  login(username: string, password: string) {
    this.httpCliente
      .get<User[]>(
        `${environments.baseUrl}/users?username=${username}&password=${password}`
      )
      .subscribe({
        next: (response) => {
          if (response.length != 0) {
            
            this.store.dispatch(AuthActions.setAuthUser({data: response[0]}));
            localStorage.setItem('token', response[0].token);


            this.router.navigate(['dashboard', 'home']);
          } else {
            alert('Credenciales Inválidas');
          }
        },
        error: (error) => {
          alert('Error de conexión');
        },
      });
  }

  verifyToken$(): Observable<boolean> {
    return this.httpCliente
      .get<User[]>(
        `${environments.baseUrl}/users?token=${localStorage.getItem('token')}`
      )
      .pipe(
        map((users) => {
          if (users.length == 0) {
            return false;
          } else {
            this.store.dispatch(AuthActions.setAuthUser({data: users[0]}));
            localStorage.setItem('token', users[0].token);
            return true;
          }
        })
      );
  }

  logOut(): void {
    this.store.dispatch(AuthActions.clearAuthUser());
    localStorage.removeItem('token');
    this.router.navigate(['auth', 'login']);
  }
}
