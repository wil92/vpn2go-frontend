import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';

@Injectable()
export class AuthService {

  static USERNAME_LS = 'USERNAME_LS';
  static PASSWORD_LS = 'PASSWORD_LS';

  apiUrl = environment.apiUrl;

  constructor(private router: Router, private http: HttpClient) {
  }

  isLogIn(): boolean {
    const username = localStorage.getItem(AuthService.USERNAME_LS);
    const password = localStorage.getItem(AuthService.PASSWORD_LS);
    return !!username && !!password;
  }

  getCredentials(): { username: string, password: string } {
    const username = localStorage.getItem(AuthService.USERNAME_LS);
    const password = localStorage.getItem(AuthService.PASSWORD_LS);
    return {username, password};
  }

  logOut(): Promise<any> {
    localStorage.removeItem(AuthService.USERNAME_LS);
    localStorage.removeItem(AuthService.PASSWORD_LS);
    return this.router.navigate(['/login']);
  }

  logIn(username, password): Observable<any> {
    return this.http.get(this.apiUrl, {
      headers: {
        Authorization: 'Basic ' + btoa(`${username}:${password}`)
      },
      responseType: 'text'
    }).pipe(
      tap(() => {
        localStorage.setItem(AuthService.USERNAME_LS, username);
        localStorage.setItem(AuthService.PASSWORD_LS, password);
      })
    );
  }
}
