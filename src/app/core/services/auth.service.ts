import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  static USERNAME_LS = 'USERNAME_LS';
  static PASSWORD_LS = 'PASSWORD_LS';

  constructor() {
  }

  isLogIn(): boolean {
    const username = localStorage.getItem(AuthService.USERNAME_LS);
    const password = localStorage.getItem(AuthService.PASSWORD_LS);
    return !!username && !!password;
  }

  getCredentials(): {username: string, password: string} {
    const username = localStorage.getItem(AuthService.USERNAME_LS);
    const password = localStorage.getItem(AuthService.PASSWORD_LS);
    return {username, password};
  }
}
