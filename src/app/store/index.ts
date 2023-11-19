import { ActionReducerMap } from "@ngrx/store";
import { AuthState, authReducer } from "./auth/auth.reducer";
import { authFeatureName } from "./auth/auth.actions";

export interface AppState {
    [authFeatureName]: AuthState;

}

export const appReducer: ActionReducerMap<AppState> = {
    [authFeatureName]: authReducer,
}