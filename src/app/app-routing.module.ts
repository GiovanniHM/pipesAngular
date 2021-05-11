import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ButtonModule} from 'primeng/button';
import { BasicosComponent } from './sales/pages/basicos/basicos.component';
import { NoComunesComponent } from './sales/pages/no-comunes/no-comunes.component';
import { NumerosComponent } from './sales/pages/numeros/numeros.component';
import { OrderComponent } from './sales/pages/order/order.component';

const routes: Routes = [

  {
    path:'',
    component: BasicosComponent,
    pathMatch: 'full'

  },
  {
    path:'numeros',
    component: NumerosComponent,

  },

  {
    path:'no-comunes',
    component:NoComunesComponent ,

  }

  ,

  {
    path:'ordenar',
    component:OrderComponent ,

  },
  {
    path:'**',
    component:NoComunesComponent ,
    redirectTo:''

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ButtonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
