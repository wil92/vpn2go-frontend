import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService, VpnService } from './services';
import { AuthGuard } from './guards';


@NgModule({
  providers: [
    VpnService,
    AuthService,
    AuthGuard
  ],
  imports: [CommonModule]
})
export class CoreModule {
}
