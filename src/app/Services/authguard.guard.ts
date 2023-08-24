import { Injectable, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authguardGuard: CanActivateFn = (route, state) => {
  const service = inject(AuthService)
  const router=inject(Router);
if(service.isloggendin()){
  return true
}else{

  
  return router.createUrlTree([""]);
}
};
