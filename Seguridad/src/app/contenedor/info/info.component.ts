import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  public robotInfo = { battery: 100, model: 'MM1.0', ns: '22D2S4F' };
  constructor() { }

  ngOnInit() {
  }

}
