import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AuthService, VpnService } from './services';
import { AuthGuard } from './guards';
import { AuthInterceptor } from './interceptors/auth.interceptor';


@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [
    VpnService,
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }
  ]
})
export class CoreModule {
}
