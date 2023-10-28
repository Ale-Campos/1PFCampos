import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Course } from 'src/data/Courses';

@Component({
  selector: 'app-courses-table',
  templateUrl: './courses-table.component.html',
  styleUrls: ['./courses-table.component.scss']
})
export class CoursesTableComponent {

  @Input() dataSource!:Course[];
  @Input() columns!:string[];

  @Output()
  courseEdit = new EventEmitter();

  @Output()
  courseDelete = new EventEmitter();

}
