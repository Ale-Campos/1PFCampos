import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { EnrollmentActions } from '../../store/enrollment.actions';
import { IAlumn } from 'src/data/Alumns';
import { Course } from 'src/data/Courses';
import {
  selectAlumnOptions,
  selectCourseOptions,
} from '../../store/enrollment.selectors';
import { Observable, map, take } from 'rxjs';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Actions, ofType } from '@ngrx/effects';
import { Enrollment } from 'src/data/Enrollment';

@Component({
  selector: 'app-enrollments-dialog',
  templateUrl: './enrollments-dialog.component.html',
  styleUrls: ['./enrollments-dialog.component.scss'],
})
export class EnrollmentsDialogComponent {
  alumnsOptions$: Observable<IAlumn[]>;
  coursesOptions$: Observable<Course[]>;

  enrollmentForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store,
    private matDialogRef: MatDialogRef<EnrollmentsDialogComponent>,
    private actions$: Actions,
    @Inject(MAT_DIALOG_DATA) public data?: Observable<Enrollment | null>
  ) {
    this.enrollmentForm = this.formBuilder.group({
      courseId: ['', [Validators.required]],
      alumnId: ['', [Validators.required]],
    });
    this.store.dispatch(EnrollmentActions.loadEnrollmentsDialogOptions());
    this.alumnsOptions$ = this.store.select(selectAlumnOptions);
    this.coursesOptions$ = this.store.select(selectCourseOptions);
    this.actions$
      .pipe(ofType(EnrollmentActions.loadEnrollments), take(1))
      .subscribe({
        next: () => this.matDialogRef.close(),
      });
    if (this.data) {

      this.data.subscribe({
        next: (value) =>{
          this.enrollmentForm.patchValue({
            courseId: value?.courseId,
            alumnId: value?.alumnId
          })
        }
      })
    }
  }

  onSubmit(): void {
    if (this.enrollmentForm.invalid) {
      this.enrollmentForm.markAllAsTouched();
    } else {
      // this.store.dispatch(
      //   EnrollmentActions.createEnrollment({ data: this.enrollmentForm.value })
      // );
      this.matDialogRef.close(this.enrollmentForm.value);
    }
  }
}
