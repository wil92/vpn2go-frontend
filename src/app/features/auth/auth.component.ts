import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../core/services';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  authForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private auth: AuthService, private router: Router) {
  }

  logIn() {
    this.auth.logIn(this.authForm.controls.username.value, this.authForm.controls.password.value).subscribe(
      () => {
        this.router.navigate(['/']);
      }, err => {
        console.log(err);
      });
  }
}
