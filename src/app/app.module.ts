import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignalsModule } from './signals/signals.module';

import { SignalsLayoutComponent } from './signals/layout/signals-layout/signals-layout.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SignalsLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    SignalsModule,
    HttpClientModule,
    
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
