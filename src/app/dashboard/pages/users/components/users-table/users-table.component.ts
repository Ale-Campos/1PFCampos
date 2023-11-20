import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { selectAuthUser } from 'src/app/store/auth/auth.selector';
import { User } from 'src/data/Users';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent {

  userRole: Observable<'admin' | 'tested' | undefined>;
  
  constructor(private store: Store) {
    this.userRole  = this.store.select(selectAuthUser).pipe(map(user => user?.role));
  }

  @Input()
  dataSource!: User[];

  @Input()
  columns!: string[];

  @Output()
  userEdit = new EventEmitter();

  @Output()
  userDelete = new EventEmitter();

  @Output()
  userDetail = new EventEmitter();

}
