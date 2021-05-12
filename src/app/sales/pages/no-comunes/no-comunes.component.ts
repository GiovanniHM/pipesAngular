import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent implements OnInit {


  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
//i18nSelect
  nombre: string = 'Susana';
  genero: string = 'f';

  invitacionMap={
    'm': 'invitarlo',
    'f': 'invitarla',
  }

  //i18nPlural
  clientes: string[] = ['','', '']

  clientesMap = {
    '=0': 'no tenemos cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando',

  }

  changeGenderM(){
    this.nombre = 'Mario';
    this.genero = 'm';

  }

  changeGenderF(){
    this.nombre = 'Susana';
    this.genero = 'f';

  }

  addedPeople(){
    this.clientes.push('');

  }

  lessPeople(){
    this.clientes.splice(0,1);

  }



}
