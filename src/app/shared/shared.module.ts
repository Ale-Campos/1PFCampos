import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { FullnamePipe } from './pipes/fullname.pipe';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormErrorsPipe } from './pipes/form-errors.pipe';
import { FormatNameDirective } from './directives/format-name.directive';
import { MatNativeDateModule } from '@angular/material/core';



@NgModule({
  declarations: [
    FullnamePipe,
    FormErrorsPipe,
    FormatNameDirective
  ],
  imports: [
    CommonModule
  ],
   exports: [
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatTableModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    FullnamePipe,
    FormErrorsPipe,
    FormatNameDirective,
    MatDatepickerModule,
    MatNativeDateModule
   ]
})
export class SharedModule { }
