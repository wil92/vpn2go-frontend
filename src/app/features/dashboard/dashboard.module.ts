import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CoreModule } from '../../core/core.module';
import { DashboardComponent } from './dashboard.component';
import { AuthGuard } from '../../core/guards';
import { CertFormComponent } from './cert-form';
import { AngularModule } from '../../core/angular';

@NgModule({
  declarations: [DashboardComponent, CertFormComponent],
  imports: [
    CommonModule,
    CoreModule,
    AngularModule,
    RouterModule.forChild([
      {
        path: '',
        canActivate: [AuthGuard],
        component: DashboardComponent
      }
    ])
  ]
})
export class DashboardModule {
}
