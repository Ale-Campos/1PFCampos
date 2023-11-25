import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { Enrollment } from 'src/data/Enrollment';
import { selectEnrollmentDetail, selectEnrollments, selectIsLoading } from '../../store/enrollment.selectors';
import { EnrollmentActions } from '../../store/enrollment.actions';

@Component({
  selector: 'app-enrollments-table',
  templateUrl: './enrollments-table.component.html',
  styleUrls: ['./enrollments-table.component.scss']
})
export class EnrollmentsTableComponent {

  isLoading$: Observable<boolean>;
  dataSource: Observable<Enrollment[]>;
  columns = ['id', 'course', 'alumn', 'actions'];
  detail$: Observable<Enrollment | null>;
  constructor(private store: Store) {
    this.dataSource = this.store.select(selectEnrollments);
    //Con esto puedo saber si se esta cagrando la data
    this.isLoading$ = this.store.select(selectIsLoading);
    this.detail$ = this.store.select(selectEnrollmentDetail);
   }

   enrollmentDetail(id: string): void {
    this.store.dispatch(EnrollmentActions.loadEnrollmentDetail({id}));
    this.detail$ = this.store.select(selectEnrollmentDetail);    
   }

   enrollmentEdit(enrollment: Enrollment): void {}

   enrollmentDelete(id: string): void {}

}
