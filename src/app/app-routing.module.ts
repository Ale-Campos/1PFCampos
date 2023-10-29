import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './dashboard/pages/home/home.component';
import { AlumnsComponent } from './dashboard/pages/alumns/alumns.component';
import { CoursesComponent } from './dashboard/pages/courses/courses.component';
import { AlumnDetailComponent } from './dashboard/pages/alumns/components/alumn-detail/alumn-detail.component';
import { UsersComponent } from './dashboard/pages/users/users.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: 'alumns',
        component:AlumnsComponent,
        children: [
          {
            path: 'details/:id',
            component: AlumnDetailComponent
          }
        ]
      },
      {
        path: 'courses',
        component: CoursesComponent
      },
      {
        path:'**',
        redirectTo:'home'
      }
    ]
  }, 
  {
    path: 'auth',
    component: AuthComponent
  },
  {
    path:'**',
    redirectTo: 'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
