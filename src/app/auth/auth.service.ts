import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/data/Users';
import { environments } from 'src/environments/environment.local';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _authUser$ = new BehaviorSubject<User | null>(null);
  public authUser$ = this._authUser$.asObservable();

  constructor(private httpCliente: HttpClient, private router: Router) {

  }

  login(username: string, password: string) {

    this.httpCliente
    .get<User[]>(`${environments.baseUrl}/users?username=${username}&password=${password}`)
    .subscribe({
      next: (response) => {
        if(response.length != 0){
          this._authUser$.next(response[0]);
          this.router.navigate(['dashboard', 'home']);
        } else {
          alert("Credenciales Inválidas");
        }
      }
    })
  }

}
