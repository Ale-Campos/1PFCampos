import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/data/Users';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent {

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
