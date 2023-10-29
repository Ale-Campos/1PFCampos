import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Course } from 'src/data/Courses';

@Component({
  selector: 'app-courses-dialog',
  templateUrl: './courses-dialog.component.html',
  styleUrls: ['./courses-dialog.component.scss']
})
export class CoursesDialogComponent {
  courseForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private matDialogRef: MatDialogRef<CoursesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data?:Course
    ) {
   this.courseForm = this.formBuilder.group({
    name: ["", [Validators.required]],
    startDate: ["", [Validators.required]],
    endDate: ["", [Validators.required]]
   });

   if(this.data) {
    this.courseForm.patchValue(this.data)
   }
  }

  onSubmit(): void {
    if(this.courseForm.invalid) {
      this.courseForm.markAllAsTouched();
    } else {
      this.matDialogRef.close(this.courseForm.value);
    }
  }
}
