import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import { AuthService } from '../services';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router: Router, private auth: AuthService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req;
    if (this.auth.isLogIn()) {
      const {username, password} = this.auth.getCredentials();
      authReq = req.clone({headers: req.headers.set('Authorization', 'Bearer')});
    }
    return next.handle(authReq);
  }
}
