import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavBarComponent } from './menu/nav-bar/nav-bar.component';
import { SideBarComponent } from './menu/side-bar/side-bar.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContainerComponent } from './contenedor/container/container.component';
import { InfoComponent } from './contenedor/info/info.component';
import { SesionesComponent } from './contenedor/sesiones/sesiones.component';
import { ServeComponent } from './serve/serve.component';
import { RegistroComponent } from './autentificacion/registro/registro.component';
import { FormsModule, ReactiveFormsModule } from '../../node_modules/@angular/forms';
import { LogInComponent } from './autentificacion/log-in/log-in.component';
import { ControlComponent } from './menu/control/control.component';
import { ObservationComponent } from './menu/observation/observation.component';
import { ControlRemotoService } from './servicios/control-remoto.service';
import { IdentificacionComponent } from './contenedor/identificacion/identificacion.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SideBarComponent,
    ContainerComponent,
    InfoComponent,
    SesionesComponent,
    ServeComponent,
    RegistroComponent,
    LogInComponent,
    ControlComponent,
    ObservationComponent,
    IdentificacionComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      // { path: '', component: InfoComponent },
      { path: 'Sesiones', component: SesionesComponent },
      { path: 'Registro', component: RegistroComponent },
      { path: 'LogIn', component: LogInComponent },
      { path: 'Control', component: ControlComponent },
      { path: 'SideBar', component: SideBarComponent },
      { path: 'Anexo1', component: IdentificacionComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ]),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    ControlRemotoService
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
