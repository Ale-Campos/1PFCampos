import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Course } from 'src/data/Courses';
import { IAlumn } from 'src/data/Alumns';
import { CreateEnrollmentData, Enrollment } from 'src/data/Enrollment';

export const EnrollmentActions = createActionGroup({
  source: 'Enrollment',
  events: {
    'Load Enrollments': emptyProps(),
    'Load Enrollments Success': props<{ data: Enrollment[] }>(),
    'Load Enrollments Failure': props<{ error: unknown }>(),
    'Load Enrollments Dialog Options': emptyProps(),
    'Load Enrollments Dialog Options Success': props<{courses:Course[]; alumns: IAlumn[]}>(),
    'Load Enrollments Dialog Options Failure': props<{error: unknown}>(),
    'Create Enrollment': props<{ data: CreateEnrollmentData }>(),
    'Create Enrollment Failure': props<{error: unknown}>(),
    'Load Enrollment Detail': props<{id: string}>(),
    'Load Enrollment Detail Success': props<{data: Enrollment}>(),
    'Load Enrollment Detail Failure': props<{error: unknown}>(),
    'Update Enrollment': props<{id: string; data: Enrollment}>(),
    'Update Enrollment Failure': props<{error: unknown}>(),
    'Delete Enrollment': props<{id: string}>(),
    'Delete Enrollment Failure': props<{error: unknown}>(),
  }
});
