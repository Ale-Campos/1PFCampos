import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IAlumn } from 'src/data/Alumns';
import { AlumnsService } from '../../alumns.service';

@Component({
  selector: 'app-alumn-detail',
  templateUrl: './alumn-detail.component.html',
  styleUrls: ['./alumn-detail.component.scss']
})
export class AlumnDetailComponent {

  alumn: Observable<IAlumn | null >;

  constructor(private activatedRoute: ActivatedRoute,
    private alumnService: AlumnsService) {
    this.alumn = this.alumnService.getAlumn(this.activatedRoute.snapshot.params['id']);
  }
}
