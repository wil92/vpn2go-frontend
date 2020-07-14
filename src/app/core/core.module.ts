import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthService, VpnService } from './services';
import { AuthGuard } from './guards';
import { AuthInterceptor } from './interceptors/auth.interceptor';


@NgModule({
  providers: [
    VpnService,
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }
  ],
  imports: [CommonModule]
})
export class CoreModule {
}
