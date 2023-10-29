import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IAlumn } from 'src/data/Alumns';
import { AlumnsDialgoComponent } from './components/alumns-dialgo/alumns-dialgo.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alumns',
  templateUrl: './alumns.component.html',
  styleUrls: ['./alumns.component.scss'],
})
export class AlumnsComponent {
  constructor(private matDialog: MatDialog, private router: Router) {}

  dataSource: IAlumn[] = [
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
  columns = ['id', 'name', 'email', 'course', 'actions'];

  public alumnCreate(): void {
    this.matDialog
      .open(AlumnsDialgoComponent)
      .afterClosed()
      .subscribe({
        next: (value) => {
          if (value) {
            this.dataSource = [
              ...this.dataSource,
              {
                ...value,
                id: `${
                  parseInt(this.dataSource[this.dataSource.length - 1].id) + 1
                }`,
              },
            ];
          }
        },
      });
  }

  public alumnDelete(alumnId: string): void {
    this.dataSource = this.dataSource.filter((alumn) => alumn.id != alumnId);
  }

  public alumnDetails(alumnId: string): void {
    // this.matDialog.open(AlumnsDialgoComponent, {
    //   data: {
    //     alumn,
    //     edit: false,
    //   },
    // });
    this.router.navigate(['dashboard', 'alumns', 'details', alumnId])
  }

  public alumnEdit(alumn: IAlumn): void {
    this.matDialog
      .open(AlumnsDialgoComponent, {
        data: {
          alumn,
          edit: true,
        },
      })
      .afterClosed()
      .subscribe({
        next: (values) => {
          if(values) {
            this.dataSource = this.dataSource.map((readedAlumn) => {
              if (readedAlumn.id === alumn.id) {
                readedAlumn = {
                  ...readedAlumn,
                  name: values.name,
                  lastName: values.lastName,
                  email: values.email,
                  course: values.course,
                };
              }
              return readedAlumn;
            });
          }
        },
      });
  }
}
