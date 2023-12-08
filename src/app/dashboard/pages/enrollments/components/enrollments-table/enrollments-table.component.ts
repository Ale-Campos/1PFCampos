import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { Enrollment } from 'src/data/Enrollment';
import {
  selectEnrollmentDetail,
  selectEnrollments,
  selectIsLoading,
} from '../../store/enrollment.selectors';
import { EnrollmentActions } from '../../store/enrollment.actions';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EnrollmentsDialogComponent } from '../enrollments-dialog/enrollments-dialog.component';

@Component({
  selector: 'app-enrollments-table',
  templateUrl: './enrollments-table.component.html',
  styleUrls: ['./enrollments-table.component.scss'],
})
export class EnrollmentsTableComponent {
  isLoading$: Observable<boolean>;
  dataSource: Observable<Enrollment[]>;
  columns = ['id', 'course', 'alumn', 'actions'];
  detail$: Observable<Enrollment | null>;
  constructor(
    private store: Store,
    private router: Router,
    private matDialog: MatDialog
  ) {
    this.dataSource = this.store.select(selectEnrollments);
    //Con esto puedo saber si se esta cagrando la data
    this.isLoading$ = this.store.select(selectIsLoading);
    this.detail$ = this.store.select(selectEnrollmentDetail);
  }

  enrollmentDetail(id: string): void {
    // this.store.dispatch(EnrollmentActions.loadEnrollmentDetail({ id }));
    // this.detail$ = this.store.select(selectEnrollmentDetail);
    console.log(id);
    
    this.router.navigate(['dashboard', 'enrollments', 'details', id]);
  }

  enrollmentEdit(id: string): void {
    this.store.dispatch(EnrollmentActions.loadEnrollmentDetail({id}));
    this.detail$ = this.store.select(selectEnrollmentDetail);
    this.matDialog.open(EnrollmentsDialogComponent, {
      data: this.detail$
    }).afterClosed().subscribe({
      next: (values: Enrollment) => {
        if(values) {
          this.store.dispatch(EnrollmentActions.updateEnrollment({id, data: values}))
        }
      }
    })
  }

  enrollmentDelete(id: string): void {
    this.store.dispatch(EnrollmentActions.deleteEnrollment({id}));
  }
}
