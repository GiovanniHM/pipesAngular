import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipesAngular';

  nombre: string = 'Giovanni hErenÁndez';
  valor: number = 1000;
  obj = {
    nombre: 'gios'
  }


  mostrarNombre(){
    console.log(this.nombre)
  }



}
