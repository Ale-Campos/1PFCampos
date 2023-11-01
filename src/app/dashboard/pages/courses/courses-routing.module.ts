import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CourseDetailComponent } from "./components/course-detail/course-detail.component";
import { CoursesComponent } from "./courses.component";


@NgModule({
    imports: [
        RouterModule.forChild([
        {
            path:'',
            component:CoursesComponent
        },
        {
            path: 'details/:id',
            component: CourseDetailComponent
        },
        {
            path: '**',
            redirectTo: ''
        }
    ])
    ]
})

export class CoursesRoutingModule {}