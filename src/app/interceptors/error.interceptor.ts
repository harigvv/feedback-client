import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {AuthService} from "../services/auth-service/auth.service";
import {catchError} from "rxjs/operators";
import {Route, Router} from "@angular/router";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService, private router:Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(catchError((err:any) => {
      console.log("err", err, this.auth.currentUser);
      if (err.status === 401) {
        // 401 response returned from api
        // this.auth.logout();
        // location.reload();
        this.router.navigate(['login'])
      }
      const error = err.message || err.statusText;
      return throwError(error);
    }))
  }
}
