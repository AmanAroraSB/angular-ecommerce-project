import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const logGuard: CanActivateFn = (route, state) => {
  const service = inject(AuthService)
  const router=inject(Router);
  if(service.isloggendin()){
    console.log(router.url);
    
if(router.url=="/"||router.url=="/Login"){
  
  router.navigateByUrl("Home")
return router.createUrlTree(["Home"]);
}
return true;
  }else{

return true;
  }

};
