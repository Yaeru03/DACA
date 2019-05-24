import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sesiones',
  templateUrl: './sesiones.component.html',
  styleUrls: ['./sesiones.component.scss']
})
export class SesionesComponent implements OnInit {
  sesiones =  [
    {date: ' 27/07/2018', description: ' Sesión 01: Sesión grupal en la que se encuentra ...'},
    {date: ' 28/07/2018', description: ' Sesión 02: Sesión grupal en la que se encuentra ...'},
    {date: ' 29/07/2018', description: ' Sesión 03: Sesión grupal en la que se encuentra ...'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
