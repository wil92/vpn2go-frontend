import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService, VpnService } from './services';

@NgModule({
  providers: [VpnService, AuthService],
  imports: [CommonModule]
})
export class CoreModule {
}
