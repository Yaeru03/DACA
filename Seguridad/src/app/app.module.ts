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
import { ServeComponent } from './serve/serve.component';
import { RegistroComponent } from './autentificacion/registro/registro.component';
import { FormsModule, ReactiveFormsModule } from '../../node_modules/@angular/forms';
import { LogInComponent } from './autentificacion/log-in/log-in.component';
import { ControlComponent } from './menu/control/control.component';
import { ObservationComponent } from './menu/observation/observation.component';
import { ControlRemotoService } from './servicios/control-remoto.service';
import { IdentificacionComponent } from './contenedor/identificacion/identificacion.component';
import { RegistroObservacionComponent } from './contenedor/registro-observacion/registro-observacion.component';
import { GuiaPVictimaComponent } from './contenedor/guia-pvictima/guia-pvictima.component';
import { GuiaObservadoresComponent } from './contenedor/guia-observadores/guia-observadores.component';
import { GuiaFamPVictimaComponent } from './contenedor/guia-fam-pvictima/guia-fam-pvictima.component';
import { GuiaFamPAgresorComponent } from './contenedor/guia-fam-pagresor/guia-fam-pagresor.component';
import { GuiaPAgresorComponent } from './contenedor/guia-pagresor/guia-pagresor.component';
import { ReporteIncidenciasComponent } from './contenedor/reporte-incidencias/reporte-incidencias.component';
import { SobreNosotrosComponent } from './contenedor/sobre-nosotros/sobre-nosotros.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SideBarComponent,
    ContainerComponent,
    InfoComponent,
    ServeComponent,
    RegistroComponent,
    LogInComponent,
    ControlComponent,
    ObservationComponent,
    IdentificacionComponent,
    RegistroObservacionComponent,
    GuiaPVictimaComponent,
    GuiaObservadoresComponent,
    GuiaFamPVictimaComponent,
    GuiaFamPAgresorComponent,
    GuiaPAgresorComponent,
    ReporteIncidenciasComponent,
    SobreNosotrosComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      // { path: '', component: InfoComponent },
      { path: 'Registro', component: RegistroComponent },
      { path: 'LogIn', component: LogInComponent },
      { path: 'Control', component: ControlComponent },
      { path: 'SideBar', component: SideBarComponent },
      { path: 'Anexo1', component: IdentificacionComponent },
      { path: 'Anexo2', component: RegistroObservacionComponent },
      { path: 'Anexo3', component: GuiaPVictimaComponent },
      { path: 'Anexo4', component: GuiaObservadoresComponent },
      { path: 'Anexo5A', component: GuiaFamPVictimaComponent },
      { path: 'Anexo5B', component: GuiaFamPAgresorComponent },
      { path: 'Anexo6', component: GuiaPAgresorComponent },
      { path: 'Anexo7', component: ReporteIncidenciasComponent },
      { path: 'Contacto', component: SobreNosotrosComponent },
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
