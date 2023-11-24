import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { EnrollmentEffects } from './store/enrollment.effects';
import { StoreModule } from '@ngrx/store';
import { enrollmentFeature } from './store/enrollment.reducer';
import { EnrollmentsComponent } from './enrollments.component';
import { EnrollmentsTableComponent } from './components/enrollments-table/enrollments-table.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EnrollmentsDialogComponent } from './components/enrollments-dialog/enrollments-dialog.component';



@NgModule({
  declarations: [
    EnrollmentsComponent,
    EnrollmentsTableComponent,
    EnrollmentsDialogComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(enrollmentFeature),
    EffectsModule.forFeature([EnrollmentEffects]),
    SharedModule
  ],
  exports: [
    EnrollmentsComponent
  ]
})
export class EnrollmentsModule { }
