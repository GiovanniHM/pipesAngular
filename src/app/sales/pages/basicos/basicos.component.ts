import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent{

  nameLower : string = "tracusa"
  nameUpper : string = "TRACUSA"
  nameComple : string = "traCusa La ruTa dEL sOl"

  //Pipe date

  fecha: Date = new Date(); //Now


}
