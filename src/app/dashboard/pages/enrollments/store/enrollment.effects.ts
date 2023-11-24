import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of, forkJoin, concat } from 'rxjs';
import { EnrollmentActions } from './enrollment.actions';
import { HttpClient } from '@angular/common/http';
import { environments } from 'src/environments/environment.local';
import { CreateEnrollmentData, Enrollment } from 'src/data/Enrollment';
import { Course } from 'src/data/Courses';
import { IAlumn } from 'src/data/Alumns';

@Injectable()
export class EnrollmentEffects {
  loadEnrollments$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(EnrollmentActions.loadEnrollments),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.getEnrollments().pipe(
          map((data) => EnrollmentActions.loadEnrollmentsSuccess({ data })),
          catchError((error) =>
            of(EnrollmentActions.loadEnrollmentsFailure({ error }))
          )
        )
      )
    );
  });

  loadEnrollmentsDialogOptions$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(EnrollmentActions.loadEnrollmentsDialogOptions),
      concatMap(() =>
        this.getEnrollmentsDialogOption().pipe(
          map((response) =>
            EnrollmentActions.loadEnrollmentsDialogOptionsSuccess(response)
          ),
          catchError((error) => of(EnrollmentActions.loadEnrollmentsDialogOptionsFailure({error})))
        )
      )
    );
  });

  createEnrollment$ = createEffect(()=>{
    return this.actions$.pipe(
      ofType(EnrollmentActions.createEnrollment),
      concatMap((action) => {
        return this.createEnrollment(action.data).pipe(
          map((response) =>
            EnrollmentActions.loadEnrollments()
          ),
          catchError((error) => of(EnrollmentActions.createEnrollmentFailure({error})))
        )
      })
    )
  })

  constructor(private actions$: Actions, private httpClient: HttpClient) {}

  getEnrollments(): Observable<Enrollment[]> {
    return this.httpClient.get<Enrollment[]>(
      `${environments.baseUrl}/enrollments?_expand=course&_expand=alumn`
    );
  }

  getEnrollmentsDialogOption(): Observable<{
    courses: Course[];
    alumns: IAlumn[];
  }> {
    return forkJoin([
      this.httpClient.get<Course[]>(`${environments.baseUrl}/courses`),
      this.httpClient.get<IAlumn[]>(`${environments.baseUrl}/alumns`),
    ]).pipe(
      map((response) => {
        return {
          courses: response[0],
          alumns: response[1],
        };
      })
    );
  }

  createEnrollment(data: CreateEnrollmentData): Observable<Enrollment> {
    return this.httpClient.post<Enrollment>(`${environments.baseUrl}/enrollments`, data)
  }
}
