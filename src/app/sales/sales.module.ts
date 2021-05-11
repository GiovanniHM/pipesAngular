import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumerosComponent } from './pages/numeros/numeros.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { OrderComponent } from './pages/order/order.component';
import { SharedModule } from '../shared/shared.module';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';



@NgModule({
  declarations: [NumerosComponent, NoComunesComponent, BasicosComponent, OrderComponent],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    NumerosComponent, NoComunesComponent, BasicosComponent, OrderComponent]
})
export class SalesModule { }
