import { createFeature, createReducer, on } from '@ngrx/store';
import { EnrollmentActions } from './enrollment.actions';
import { Enrollment } from 'src/data/Enrollment';
import { Course } from 'src/data/Courses';
import { IAlumn } from 'src/data/Alumns';

export const enrollmentFeatureKey = 'enrollment';

export interface State {
  isLoading: boolean;
  isLoadingDialogOptions: boolean;
  enrollments: Enrollment[];
  error: unknown;
  courseOptions: Course[];
  alumnOptions: IAlumn[];
}

export const initialState: State = {
  isLoading: false,
  isLoadingDialogOptions: false,
  enrollments: [],
  error: null,
  courseOptions: [],
  alumnOptions: [],
};

export const reducer = createReducer(
  initialState,
  on(EnrollmentActions.loadEnrollments, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(EnrollmentActions.loadEnrollmentsSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    enrollments: action.data,
  })),
  on(EnrollmentActions.loadEnrollmentsFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  })),
  on(EnrollmentActions.loadEnrollmentsDialogOptions, (state, action) => ({
    ...state,
    isLoadingDialogOptions: true,
  })),
  on(
    EnrollmentActions.loadEnrollmentsDialogOptionsSuccess,
    (state, action) => ({
      ...state,
      isLoadingDialogOptions: false,
      courseOptions: action.courses,
      alumnOptions: action.alumns

    })),
    on(
      EnrollmentActions.loadEnrollmentsDialogOptionsFailure,
      (state, action) => ({
        ...state,
        error: action.error,
        isLoadingDialogOptions: false
      })
    )
);

export const enrollmentFeature = createFeature({
  name: enrollmentFeatureKey,
  reducer,
});
