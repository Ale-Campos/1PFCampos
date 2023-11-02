import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IAlumn } from 'src/data/Alumns';

@Injectable({
  providedIn: 'root'
})
export class AlumnsService {

 alumns: IAlumn[]= [
  {
    id: '1',
    name: 'Alejandro',
    lastName: 'Campos',
    email: 'alecampos@gmail.com',
    course: 'A',
  },
  {
    id: '2',
    name: 'Melina',
    lastName: 'Perez',
    email: 'melinaperez@gmail.com',
    course: 'B',
  },
  {
    id: '3',
    name: 'Alejo',
    lastName: 'Schmidt',
    email: 'alejoschmidt@gmail.com',
    course: 'C',
  },
  {
    id: '4',
    name: 'Claudio',
    lastName: 'Campos',
    email: 'caludiocampos@gmail.com',
    course: 'D',
  },
 ];

 getAlumn(alumnId: string): IAlumn | undefined {
  return this.alumns.find(a => a.id == alumnId);
 }

 getAlumns$(): Observable<IAlumn[]> {
  return of(this.alumns);
 }

 createAlumn$(newAlumn: IAlumn): Observable<IAlumn[]> {
  this.alumns.push(newAlumn);
  return of([...this.alumns]);
 }

 editAlumn$(alumnId: string, payload: IAlumn) {
  return of(this.alumns = this.alumns.map((alumn) => {
    if(alumn.id == alumnId) {
      return {
        ...alumn,
        ...payload
      }
    } else {
      return alumn;
    }
  }))
 }

 deleteAlumn$(alumnId: string) {
  return of(this.alumns = this.alumns.filter(alumn => alumn.id != alumnId));
 }

}
