import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShopperComponent } from './shopper/shopper.component';
import {FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    ShopperComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
