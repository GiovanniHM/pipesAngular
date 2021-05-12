import { Component, OnInit } from '@angular/core';
import { rejects } from 'assert';
import { PrimeNGConfig } from 'primeng/api';
import { interval } from 'rxjs';

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
  clientes: string[] = ['Mario','Lugui', 'BW']

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

  //KeyValue pipe

  persona = {
    nombre: 'test',
    edad: 45454,
    direccion: 'Error 404'
  }

  //Json pipe

  heros = ['iron Maon', 'Cap', 'Thor']

  //ASYNC

  miObserbale = interval(100);

  valorPromesa = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve('Fin de la promesa')
    }, 3500);
  });


}
