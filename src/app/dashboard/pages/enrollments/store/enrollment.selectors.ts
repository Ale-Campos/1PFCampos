import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromEnrollment from './enrollment.reducer';

export const selectEnrollmentState = createFeatureSelector<fromEnrollment.State>(
  fromEnrollment.enrollmentFeatureKey
);

export const selectEnrollments = createSelector(selectEnrollmentState, state => state.enrollments);
export const selectIsLoading = createSelector(selectEnrollmentState, state => state.isLoading);
export const selectCourseOptions = createSelector(selectEnrollmentState, state => state.courseOptions);
export const selectAlumnOptions = createSelector(selectEnrollmentState, state => state.alumnOptions);
export const selectEnrollmentDetail = createSelector(selectEnrollmentState, state => state.enrollment);