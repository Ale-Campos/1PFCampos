import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./auth.reducer";
import { authFeatureName } from "./auth.actions";

export const selectAuthState = createFeatureSelector<AuthState>(authFeatureName);

export const selectAuthUser = createSelector(selectAuthState, (state) => state.authUser);