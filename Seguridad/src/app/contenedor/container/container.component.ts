import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  public mostrarSidenav = true;
  public sidebarCollapsed = true;
  constructor(public router: Router) { }

  ngOnInit() {
    this.isLogged();
  }
  isLogged() {
    if (!localStorage.getItem('token')) {
      this.mostrarSidenav = false;
    } else {
      this.mostrarSidenav = true;
    }
  }

  needsSideBar() {
    let r = this.router.url
    return r !== '/Video' && r !== '/LogIn' && r !== '/Registro';
  }

}
