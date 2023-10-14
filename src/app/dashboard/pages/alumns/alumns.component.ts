import { Component } from '@angular/core';
import { IAlumn } from 'src/data/Alumns';

@Component({
  selector: 'app-alumns',
  templateUrl: './alumns.component.html',
  styleUrls: ['./alumns.component.scss']
})
export class AlumnsComponent {
  dataSource: IAlumn[]= [
    {
      id: "1",
      name: "Alejandro",
      lastName: "Campos",
      course: "A"
    },
    {
      id: "2",
      name: "Melina",
      lastName: "Perez",
      course: "B"
    },
    {
      id: "3",
      name: "Alejo",
      lastName: "Schmidt",
      course: "C"
    },
    {
      id: "4",
      name: "Claudio",
      lastName: "Campos",
      course: "D"
    }
  ];
  columns = ['id', 'name', 'lastName', 'course', 'actions']
}
