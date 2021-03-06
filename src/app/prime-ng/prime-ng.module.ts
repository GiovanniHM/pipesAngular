import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//prmeNg
import { ButtonModule } from 'primeng/button';

import {CardModule} from 'primeng/card';
import {MenuModule} from 'primeng/menu';
import {MenubarModule} from 'primeng/menubar';
import {FieldsetModule} from 'primeng/fieldset';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenuModule
  ],
  exports:[
    ButtonModule,
    CardModule,
    MenuModule,
    MenubarModule,
    FieldsetModule
  ]
})
export class PrimeNgModule { }
