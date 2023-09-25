import { Injectable } from '@angular/core';
import * as alertifyjs from 'alertifyjs';
import { Router } from '@angular/router';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError, Observable, switchMap, throwError } from 'rxjs';
import { AuthService } from '../Services/auth.service';
import { User } from 'src/app/core/Model/User';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authservice: AuthService, private route: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const myToken = this.authservice.gettoken();
  
   
    if (myToken) {

      let request = req.clone({
        setHeaders: { Authorization: `Bearer ${myToken}` }  // "Bearer "+myToken
      })
      return next.handle(request);
    } else {
      return next.handle(req)
    }

    // return next.handle(request).pipe(
    //   catchError((err: any) => {
    //     if (err instanceof HttpErrorResponse) {
    //       if (err.status === 401) {
    //         //this.toast.warning({detail:"Warning", summary:"Token is expired, Please Login again"});
    //         //this.router.navigate(['login'])
    //         //handle
    //         return this.handleUnAuthorizedError(request, next);
    //       }
    //     }
    //     return throwError(() => err)
    //   })
    // );
  }
  // handleUnAuthorizedError(req: HttpRequest<any>, next: HttpHandler) {
  //   let tokeApiModel = new User();
  //   tokeApiModel.Token = this.authservice.gettoken()!;

  //   return this.authservice.renewToken(tokeApiModel)

  //   catchError((err) => {
  //     return throwError(() => {
  //       alertifyjs.error("Token is expired, Please Login again");
  //       this.route.navigate(['login'])
  //     })
  //   })

  // }
}

