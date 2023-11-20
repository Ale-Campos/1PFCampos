import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UsersComponent } from './pages/users/users.component';
import { AlumnsComponent } from './pages/alumns/alumns.component';
import { AlumnDetailComponent } from './pages/alumns/components/alumn-detail/alumn-detail.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { DashboardComponent } from './dashboard.component';
import { adminGuard } from '../core/guards/admin.guard';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent,
        children: [
          {
            path: 'home',
            component: HomeComponent,
          },
          {
            path: 'users',
            loadChildren: () => import('./pages/users/users-routing.module')
            .then(m => m.UsersRoutingModule),
            canActivate: [adminGuard],
          },
          {
            path: 'alumns',
            loadChildren:() => import('./pages/alumns/alums-routing.module')
            .then(m => m.AlumnsRoutingModule)
          },

          {
            path: 'courses',
            loadChildren: () => import('./pages/courses/courses-routing.module')
            .then(m => m.CoursesRoutingModule)
          },
          {
            path: 'enrollments',
            loadChildren: () => import('./pages/enrollments/enrollments-routing.module')
            .then(m => m.EnrollmentsRoutingModule)
          },
          {
            path: '**',
            redirectTo: 'home',
          },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
