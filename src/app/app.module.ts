import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { InitialPageModule } from './modules/initial-page/initial-page.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InitialPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
