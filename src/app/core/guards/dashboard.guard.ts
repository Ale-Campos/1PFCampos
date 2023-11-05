import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

export const dashboardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  return authService.verifyToken$().pipe(
    map((isAuth) => {
      return isAuth ? true : router.createUrlTree(['/auth/login']);
    })
  );

  // return tokenValido? true : router.createUrlTree(['/auth']);
};
