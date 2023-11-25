import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Enrollment } from 'src/data/Enrollment';
import { selectEnrollmentDetail } from '../../store/enrollment.selectors';

@Component({
  selector: 'app-enrollment-details',
  templateUrl: './enrollment-details.component.html',
  styleUrls: ['./enrollment-details.component.scss']
})
export class EnrollmentDetailsComponent {

  enrollment$: Observable<Enrollment | null>;

  constructor(private store: Store) {
    this.enrollment$ = this.store.select(selectEnrollmentDetail);
  }

}
