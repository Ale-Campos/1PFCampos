import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Enrollment } from 'src/data/Enrollment';
import { selectEnrollments, selectIsLoading } from '../../store/enrollment.selectors';

@Component({
  selector: 'app-enrollments-table',
  templateUrl: './enrollments-table.component.html',
  styleUrls: ['./enrollments-table.component.scss']
})
export class EnrollmentsTableComponent {

  isLoading$: Observable<boolean>;
  dataSource: Observable<Enrollment[]>;
  columns = ['id', 'course', 'alumn', 'actions'];
  constructor(private store: Store) {
    this.dataSource = this.store.select(selectEnrollments);
    //Con esto puedo saber si se esta cagrando la data
    this.isLoading$ = this.store.select(selectIsLoading);
   }

}
