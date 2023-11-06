import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Course } from 'src/data/Courses';
import { environments } from 'src/environments/environment.local';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private _courses$ = new BehaviorSubject<Course[]>([]);
  public courses$ = this._courses$.asObservable();

  private _course$ = new BehaviorSubject<Course | null>(null);
  public course$ = this._course$.asObservable();

  constructor(private httpCliente: HttpClient) {}

  getCourse(courseId: string): Observable<Course | null> {
    this.httpCliente
      .get<Course[]>(`${environments.baseUrl}/courses?id=${courseId}`)
      .subscribe({
        next: (response) => {
          this._course$.next(response[0]);
        },
        error: (error) => {
          this._course$.next(null);
        },
      });
    return this.course$;
  }

  getCourses$(): Observable<Course[]> {
    this.httpCliente
      .get<Course[]>(`${environments.baseUrl}/courses`)
      .subscribe({
        next: (response) => {
          this._courses$.next(response);
        },
        error: (error) => {
          this._courses$.next([]);
        },
      });
    return this.courses$;
  }

  createCoruse$(newCourse: Course): Observable<Course[]> {
    this.httpCliente
      .post(`${environments.baseUrl}/courses`, {
        id: newCourse.id,
        name: newCourse.name,
        startDate: newCourse.startDate,
        endDate: newCourse.endDate,
      })
      .subscribe({
        next: () => {
          this.getCourses$();
        },
        error: () => {
          alert('Error de conexión');
        },
      });
    return this.courses$;
  }

  editCoruse$(courseId: string, payload: Course): Observable<Course[]> {
    this.httpCliente
      .put(`${environments.baseUrl}/courses/${courseId}`, {
        id: payload.id,
        name: payload.name,
        startDate: payload.startDate,
        endDate: payload.endDate,
      })
      .subscribe({
        next: () => {
          this.getCourses$();
        },
        error: () => {
          alert('Error de conexión');
        },
      });

    return this.courses$;
  }

  deleteCourse$(courseId: string): Observable<Course[]> {
    this.httpCliente
      .delete(`${environments.baseUrl}/courses/${courseId}`)
      .subscribe({
        next: () => {
          this.getCourses$();
        },
        error: () => {
          alert('Error de conexión');
        },
      });
    return this.courses$;
  }
}
