import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Course } from 'src/data/Courses';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {


  courses: Course[] = [
    {
      id: "1",
      name: "Desarrollo Web",
      startDate: new Date(),
      endDate: new Date()
    },
    {
      id: "2",
      name: "Angular",
      startDate: new Date(),
      endDate: new Date()
    },
    {
      id: "3",
      name: "React",
      startDate: new Date(),
      endDate: new Date()
    },

  ];

  getCourses$(): Observable<Course[]> {
    return of(this.courses);
  }

  createCoruse$(newCourse: Course): Observable<Course[]> {
    this.courses.push(newCourse);
    return of([...this.courses]);
  }

  editCoruse$(courseId: string, payload: Course): Observable<Course[]> {
    console.log( "Payload",payload);
    
    return of(this.courses = this.courses.map((course) => {
      if(course.id == courseId){
       return {
          ...course,
          ...payload
        }
      } else {
        return course;
      }
    }));
  }

  deleteCourse$(courseId:string) {
    return of(this.courses = this.courses.filter((course) => course.id != courseId));
  }

}
