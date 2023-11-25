import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-alumns-dialgo',
  templateUrl: './alumns-dialgo.component.html',
  styles: [
  ]
})
export class AlumnsDialgoComponent {
  alumnForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AlumnsDialgoComponent>,
    @Inject(MAT_DIALOG_DATA) public data?: any,
    ) {
    this.alumnForm = this.formBuilder.group({
      name:["" , [Validators.required]],
      lastName:["" , [Validators.required]],
      email: ["" , [Validators.required, Validators.email]],
      dni: ["" , [Validators.required]],
    });

    if(this.data) {
      this.alumnForm.patchValue(this.data.alumn);
      if(!data.edit){
        this.alumnForm.disable();
      }
    }
  }

  onSubmit(): void {
    if(this.alumnForm.invalid) {
      this.alumnForm.markAllAsTouched();
    } else {
      this.dialogRef.close(this.alumnForm.value);
    }
  }
}
