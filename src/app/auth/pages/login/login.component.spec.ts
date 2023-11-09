import { TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LoginComponent', () => {
  let testedComponent: LoginComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [CommonModule, SharedModule, HttpClientTestingModule],
    });

    testedComponent = TestBed.createComponent(LoginComponent).componentInstance;
  });

  it('should create LoginComponent', () => {
    expect(testedComponent).toBeTruthy();
  });

  it('should mark all fields as touched if the form its empty', () => {
    testedComponent.onSubmit();
    expect(testedComponent.loginForm.controls['username'].touched).toBeTrue();
    expect(testedComponent.loginForm.controls['password'].touched).toBeTrue();
  });

  it('should call the AuthServices Login() method if the form is valid', () => {
    const spyOnAuthServiceLogin = spyOn(
      (testedComponent as any).authService,
      'login'
    );

    testedComponent.loginForm.patchValue({
      username: 'user3',
      password: 'pass3',
    });

    testedComponent.onSubmit();

    expect(spyOnAuthServiceLogin).toHaveBeenCalled();
  });
});
