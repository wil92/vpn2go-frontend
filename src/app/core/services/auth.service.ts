import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthService {

  static USERNAME_LS = 'USERNAME_LS';
  static PASSWORD_LS = 'PASSWORD_LS';

  constructor(private router: Router) {
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

  logIn(username, password) {
    return of({}).pipe(tap(() => {
      localStorage.setItem(AuthService.USERNAME_LS, username);
      localStorage.setItem(AuthService.PASSWORD_LS, password);
    }));
  }
}
