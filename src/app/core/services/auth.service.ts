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

  private static memoryStorage = new Map<string, string>();

  apiUrl = environment.apiUrl;

  constructor(private router: Router, private http: HttpClient) {
  }

  isLogIn(): boolean {
    const {username, password} = this.getCredentials();
    return !!username && !!password;
  }

  getCredentials(): { username: string, password: string } {
    const username = AuthService.memoryStorage.get(AuthService.USERNAME_LS);
    const password = AuthService.memoryStorage.get(AuthService.PASSWORD_LS);
    return {username, password};
  }

  logOut(): Promise<any> {
    AuthService.memoryStorage.delete(AuthService.USERNAME_LS);
    AuthService.memoryStorage.delete(AuthService.PASSWORD_LS);
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
        AuthService.memoryStorage.set(AuthService.USERNAME_LS, username);
        AuthService.memoryStorage.set(AuthService.PASSWORD_LS, password);
      })
    );
  }
}
