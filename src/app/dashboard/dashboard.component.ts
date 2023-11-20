import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { selectAuthUser } from '../store/auth/auth.selector';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  userRole$:  Observable<'admin' | 'tested' | undefined>;
  constructor(private authService: AuthService, private store:Store) {
    this.userRole$ = this.store.select(selectAuthUser).pipe(map((user) => user?.role));
  }

  logOut(): void {
    this.authService.logOut();
  }
}
