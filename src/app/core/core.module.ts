import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VpnService } from './services';

@NgModule({
  providers: [VpnService],
  imports: [CommonModule]
})
export class CoreModule {
}
