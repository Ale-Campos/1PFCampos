import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { EnrollmentsComponent } from './enrollments.component';
import { EnrollmentDetailsComponent } from "./components/enrollment-details/enrollment-details.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: EnrollmentsComponent,
            },
            {
                path: 'details/:id',
                component: EnrollmentDetailsComponent
            }
        ])
    ],
    exports: [RouterModule]
})
export class EnrollmentsRoutingModule {}