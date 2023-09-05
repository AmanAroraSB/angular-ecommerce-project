import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../auth.service';

export const roleguardGuard: CanActivateFn = (route, state) => {
  const service = inject(AuthService)
  var role=service.role()
 if(role){

   return true;
 }else{
  return false;
 }
};
