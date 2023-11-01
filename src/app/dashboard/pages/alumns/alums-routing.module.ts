import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AlumnDetailComponent } from "./components/alumn-detail/alumn-detail.component";
import { AlumnsComponent } from "./alumns.component";


@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: AlumnsComponent,
            },
            {
                path: 'details/:id',
                component: AlumnDetailComponent,
            },
            {
                path: '**',
                redirectTo: ''
            }
        ])
    ],
    exports: [RouterModule]
})

export class AlumnsRoutingModule {}