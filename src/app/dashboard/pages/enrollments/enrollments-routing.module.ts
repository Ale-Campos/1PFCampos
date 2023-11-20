import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { EnrollmentsComponent } from './enrollments.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: EnrollmentsComponent,
            }
        ])
    ],
    exports: [RouterModule]
})
export class EnrollmentsRoutingModule {}