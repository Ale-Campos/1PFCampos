import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { IAlumn } from 'src/data/Alumns';
import { environments } from 'src/environments/environment.local';

@Injectable({
  providedIn: 'root',
})
export class AlumnsService {
  private _alumns$ = new BehaviorSubject<IAlumn[]>([]);
  public alumns$ = this._alumns$.asObservable();
  
  private _alumn$ = new BehaviorSubject<IAlumn | null>(null);
  public alumn$ = this._alumn$.asObservable();

  constructor(private httpCliente: HttpClient) {}

  getAlumn(alumnId: string): Observable<IAlumn | null> {
    this.httpCliente.get<IAlumn[]>(`${environments.baseUrl}/alumns?id=${alumnId}`).subscribe({
      next: (response) => {
        this._alumn$.next(response[0]);        
      },
      error: () => {
        this._alumn$.next(null); 
      }
    });

    return this.alumn$;
  }

  getAlumns$(): Observable<IAlumn[]> {
    this.httpCliente.get<IAlumn[]>(`${environments.baseUrl}/alumns`).subscribe({
      next: (response) => {

        this._alumns$.next(response);        
      },
      error: (error) => {
        this._alumns$.next([]); 
      }
    });
    
    return this.alumns$;
  }

  createAlumn$(newAlumn: IAlumn): Observable<IAlumn[]> {
    this.httpCliente.post(`${environments.baseUrl}/alumns`, {
      email: newAlumn.email,
      id: newAlumn.id,
      lastname: newAlumn.lastName,
      name: newAlumn.name,
      course: newAlumn.course
    }).subscribe({
      next: () => {
        this.getAlumns$();
      },
      error: () => {
        alert("Error de conexión");
      }
    });
    return this.alumns$;
  }

  editAlumn$(alumnId: string, payload: IAlumn) {
    
    this.httpCliente.put(`${environments.baseUrl}/alumns/${alumnId}`, {
      email: payload.email,
      id: payload.id,
      lastname: payload.lastName,
      name: payload.name,
      course: payload.course
    }).subscribe({
      next: () => {
        this.getAlumns$();
      },
      error: () => {
        alert("Error de conexión")
      }
    });
    
    return this.alumns$;
  }

  deleteAlumn$(alumnId: string) {
    this.httpCliente.delete(`${environments.baseUrl}/alumns/${alumnId}`)
    .subscribe({
      next: () => {
        this.getAlumns$();
      },
      error: () => {
        alert("Error de conexión");
      }
    });
    return this.alumns$;
  }
}
