import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../core/services';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  apiUrl = environment.apiUrl;

  constructor(private auth: AuthService) {
  }

  ngOnInit(): void {
  }

  async logOut() {
    await this.auth.logOut();
  }
}
