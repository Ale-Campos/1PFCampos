import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { User } from 'src/data/Users';
import { Observable } from 'rxjs';
import { environments } from 'src/environments/environment.local';
import { MockProvider } from 'ng-mocks';
import { Router } from '@angular/router';
import { provideMockStore } from '@ngrx/store/testing';

describe('AuthService', () => {
  let testedService: AuthService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [MockProvider(Router), provideMockStore({})],
    });
    testedService = TestBed.inject(AuthService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('AuthService should be defined', () => {
    expect(testedService).toBeTruthy();
  });

  it('should define an Authenticated user when login() is callled with valids credentials', () => {
    const userMock: User = {
      id: 'testedUser',
      name: 'Tested',
      lastname: 'User',
      email: 'tested@user.com',
      username: 'tsestedUser',
      password: 'testedUser1',
      role: 'tested',
      token: 'testedUser1234567',
    };

    testedService.login(userMock.username, userMock.password);

    httpController
      .expectOne({
        method: 'GET',
        url: `${environments.baseUrl}/users?username=${userMock.username}&password=${userMock.password}`,
      })
      .flush([userMock]);

    testedService.authUser$.subscribe({
      next: (authUser) => {
        expect(authUser).toEqual(userMock);
      },
    });
  });
});
