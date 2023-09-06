import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

export const authguardGuard: CanActivateFn = (route, state) => {
  const service = inject(AuthService);
  const router = inject(Router);
  if (service.isloggendin()) {
    console.log('loggedin');

    console.log(router.url);

    return true;
  } else {
    router.navigateByUrl('Login');
    return false;
  }
};
