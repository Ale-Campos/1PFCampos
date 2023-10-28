import { Component } from '@angular/core';
import { Course } from 'src/data/Courses';
import { CoursesService } from './courses.service';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { CoursesDialogComponent } from './components/courses-dialog/courses-dialog.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {

  courses$: Observable<Course[]>;

  constructor(private coursesService: CoursesService, private matDialog: MatDialog) {
    this.courses$ = this.coursesService.getCourses$();
  }
  columns = ['id', 'name', 'startDate', 'endDate', 'actions'];

  courseCreate(): void {
    this.matDialog.open(CoursesDialogComponent).afterClosed().subscribe({
      next: (value) => {
        if(value) {
          let newId = new Date().getTime().toString();
          this.courses$ = this.coursesService.createCoruse$({
            id: newId,
            name: value.name,
            startDate: new Date(),
            endDate: new Date()
          });
        }
      }
    });
  }

  courseEdit(course: Course): void {
    this.matDialog.open(CoursesDialogComponent, {
      data: course
    }).afterClosed().subscribe({
      next: (values) => {
        console.log(values);
        
        if(values) {
          this.courses$ = this.coursesService.editCoruse$(course.id, values);
        }
      }
    })
  }

  courseDelete(courseId: string): void {
    this.courses$ = this.coursesService.deleteCourse$(courseId);
  }


}
