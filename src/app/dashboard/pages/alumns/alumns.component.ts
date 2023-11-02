import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IAlumn } from 'src/data/Alumns';
import { AlumnsDialgoComponent } from './components/alumns-dialgo/alumns-dialgo.component';
import { Router } from '@angular/router';
import { AlumnsService } from './alumns.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-alumns',
  templateUrl: './alumns.component.html',
  styleUrls: ['./alumns.component.scss'],
})
export class AlumnsComponent {
  dataSource: Observable<IAlumn[]>;

  constructor(private matDialog: MatDialog, private router: Router, private alumnService: AlumnsService) {
    this.dataSource = this.alumnService.getAlumns$();
  }

  
  columns = ['id', 'name', 'email', 'course', 'actions'];

  public alumnCreate(): void {
    this.matDialog
      .open(AlumnsDialgoComponent)
      .afterClosed()
      .subscribe({
        next: (value: IAlumn) => {
          if (value) {
            let newId = new Date().getTime().toString();
            this.dataSource = this.alumnService.createAlumn$({
              id: newId,
              name: value.name,
              lastName: value.lastName,
              email: value.email,
              course: value.course
            });
          }
        },
      });
  }

  public alumnDelete(alumnId: string): void {
    this.dataSource = this.alumnService.deleteAlumn$(alumnId);
  }

  public alumnDetails(alumnId: string): void {
    this.router.navigate(['dashboard', 'alumns', 'details', alumnId]);
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
        next: (values: IAlumn) => {
          if(values) {
            console.log(values);
            
            this.dataSource = this.alumnService.editAlumn$(alumn.id, values);
          }
        },
      });
  }
}
