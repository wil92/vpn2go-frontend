import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { AppComponent } from './features';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
