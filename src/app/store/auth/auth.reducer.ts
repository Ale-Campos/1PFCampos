import { createReducer, on } from '@ngrx/store';
import { User } from 'src/data/Users';
import { AuthActions } from './auth.actions';

export interface AuthState {
  authUser: User | null;
}

const initialState: AuthState = {
  authUser: null,
};

export const authReducer = createReducer(
  initialState,
  //Me quedo con todo lo que tenga state y modifico el authUser especificamente
  on(AuthActions.setAuthUser, (state, action) =>({...state, authUser: action.data})),
  on(AuthActions.clearAuthUser, () => initialState)
);
