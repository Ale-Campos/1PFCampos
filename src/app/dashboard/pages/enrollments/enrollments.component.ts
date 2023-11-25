import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { EnrollmentActions } from './store/enrollment.actions';
import { MatDialog } from '@angular/material/dialog';
import { EnrollmentsDialogComponent } from './components/enrollments-dialog/enrollments-dialog.component';

@Component({
  selector: 'app-enrollments',
  templateUrl: './enrollments.component.html',
  styleUrls: ['./enrollments.component.scss']
})
export class EnrollmentsComponent {

  constructor(private store: Store, private matDialog: MatDialog) { 
    this.store.dispatch(EnrollmentActions.loadEnrollments());
  }

  enrollmentCreate(): void {
    this.matDialog.open(EnrollmentsDialogComponent).afterClosed().subscribe({
      next: (value) => {
        if(value) {
          this.store.dispatch(EnrollmentActions.createEnrollment({data: value}))
        }
      }
    });
  }
}
