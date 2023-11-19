import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { User } from "src/data/Users";

export const authFeatureName = 'auth'

export const AuthActions = createActionGroup({
    source: 'Auth',
    events: {
        'Set Auth User': props<{data: User}>(),
        'Clear Auth User': emptyProps(),
    }
});