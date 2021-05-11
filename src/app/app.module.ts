import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Custom Module
import { PrimeNgModule } from './prime-ng/prime-ng.module'
import { from } from 'rxjs';
import { SharedModule } from './shared/shared.module';
import { SalesModule } from './sales/sales.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimeNgModule,
    SharedModule,
    SalesModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
