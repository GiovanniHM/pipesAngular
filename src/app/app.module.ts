import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';




//Custom Module
import { PrimeNgModule } from './prime-ng/prime-ng.module'
import { from } from 'rxjs';
import { SharedModule } from './shared/shared.module';
import { SalesModule } from './sales/sales.module';

//Change local app
import localEs from '@angular/common/locales/es-HN';
import localFr from '@angular/common/locales/fr';
import {registerLocaleData }from '@angular/common';
registerLocaleData(localEs);
registerLocaleData(localFr);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimeNgModule,
    SharedModule,
    SalesModule,
    BrowserAnimationsModule

  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es-HN' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
