import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-observation',
  templateUrl: './observation.component.html',
  styleUrls: ['./observation.component.scss']
})
export class ObservationComponent implements OnInit {
  notas = [
    { min: 3, seg: 40, nota: 'Aquí el niño se ve muy triste' },
    { min: 40, seg: 37, nota: 'Aquí el niño se nota enojado' },
    { min: 59, seg: 24, nota: 'Preguntar por este amigo a sus padres' }
  ]
  constructor() { }

  ngOnInit() {
  }

}
