import { createFeature, createReducer, on } from '@ngrx/store';
import { EnrollmentActions } from './enrollment.actions';
import { Enrollment } from 'src/data/Enrollment';

export const enrollmentFeatureKey = 'enrollment';

export interface State {
  isLoading: boolean;
  enrollments: Enrollment[];
  error: unknown;
}

export const initialState: State = {
  isLoading: false,
  enrollments: [],
  error: null
};

export const reducer = createReducer(
  initialState,
  on(EnrollmentActions.loadEnrollments, state => ({...state, isLoading: true})),
  on(EnrollmentActions.loadEnrollmentsSuccess, (state, action) => ({...state, isLoading: false, enrollments: action.data })),
  on(EnrollmentActions.loadEnrollmentsFailure, (state, action) => ({...state, isLoading: false, error: action.error })),
);

export const enrollmentFeature = createFeature({
  name: enrollmentFeatureKey,
  reducer,
});

