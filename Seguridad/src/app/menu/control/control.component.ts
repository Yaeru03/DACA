import { Component, OnInit } from '@angular/core';
import { ControlRemotoService } from '../../servicios/control-remoto.service';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit {

  constructor(private controlRemoto: ControlRemotoService) {

  }

  ngOnInit() {
  }

  onUp() {
    // console.log("Enviaré Forward");
    // this.controlRemoto.socket.emit('forward', 'desde angular, te ordeno que avances');
    let n = 0;
    let v = 500;
    setTimeout(() => {
      this.controlRemoto.socket.emit('execute', '{ "fr1": 90, "fr2": 40, "fr3": 120, "fl1": 90, "fl2": 40, "fl3": 120, "mr1": 90, "mr2": 40, "mr3": 120, "ml1": 90, "ml2": 40, "ml3": 120, "br1": 90, "br2": 40, "br3": 120, "bl1": 90, "bl2": 40, "bl3": 120 }\n');
    }, n++ * 0);
    setTimeout(() => {
      this.controlRemoto.socket.emit('execute', '{ "fr1": 90, "fr2": 130, "fr3": 170, "fl1": 90, "fl2": 40, "fl3": 120, "mr1": 90, "mr2": 40, "mr3": 120, "ml1": 90, "ml2": 130, "ml3": 170, "br1": 90, "br2": 130, "br3": 170, "bl1": 90, "bl2": 40, "bl3": 120 }\n');
    }, n++ * v);
    setTimeout(() => {
      this.controlRemoto.socket.emit('execute', '{ "fr1": 110, "fr2": 130, "fr3": 170, "fl1": 90, "fl2": 40, "fl3": 120, "mr1": 90, "mr2": 40, "mr3": 120, "ml1": 110, "ml2": 130, "ml3": 170, "br1": 110, "br2": 130, "br3": 170, "bl1": 90, "bl2": 40, "bl3": 120 }\n');
    }, n++ * v);
    setTimeout(() => {
      this.controlRemoto.socket.emit('execute', '{ "fr1": 110, "fr2": 40, "fr3": 120, "fl1": 90, "fl2": 40, "fl3": 120, "mr1": 90, "mr2": 40, "mr3": 120, "ml1": 110, "ml2": 40, "ml3": 120, "br1": 110, "br2": 40, "br3": 120, "bl1": 90, "bl2": 40, "bl3": 120 }\n');
    }, n++ * v);
    setTimeout(() => {
      this.controlRemoto.socket.emit('execute', '{ "fr1": 110, "fr2": 40, "fr3": 120, "fl1": 90, "fl2": 130, "fl3": 170, "mr1": 90, "mr2": 130, "mr3": 170, "ml1": 110, "ml2": 40, "ml3": 120, "br1": 110, "br2": 40, "br3": 120, "bl1": 90, "bl2": 130, "bl3": 170 }\n');
    }, n++ * v);
    setTimeout(() => {
      this.controlRemoto.socket.emit('execute', '{ "fr1": 90, "fr2": 40, "fr3": 120, "fl1": 90, "fl2": 130, "fl3": 170, "mr1": 90, "mr2": 130, "mr3": 170, "ml1": 90, "ml2": 40, "ml3": 120, "br1": 90, "br2": 40, "br3": 120, "bl1": 90, "bl2": 130, "bl3": 170 }\n');
    }, n++ * v);
    setTimeout(() => {
      this.controlRemoto.socket.emit('execute', '{ "fr1": 90, "fr2": 40, "fr3": 120, "fl1": 110, "fl2": 130, "fl3": 170, "mr1": 110, "mr2": 130, "mr3": 170, "ml1": 90, "ml2": 40, "ml3": 120, "br1": 90, "br2": 40, "br3": 120, "bl1": 110, "bl2": 130, "bl3": 170 }\n');
    }, n++ * v);
    setTimeout(() => {
      this.controlRemoto.socket.emit('execute', '{ "fr1": 90, "fr2": 40, "fr3": 120, "fl1": 110, "fl2": 40, "fl3": 120, "mr1": 110, "mr2": 40, "mr3": 120, "ml1": 90, "ml2": 40, "ml3": 120, "br1": 90, "br2": 40, "br3": 120, "bl1": 110, "bl2": 40, "bl3": 120 }\n');
    }, n++ * v);
    setTimeout(() => {
      this.controlRemoto.socket.emit('execute', '{ "fr1": 90, "fr2": 130, "fr3": 170, "fl1": 110, "fl2": 40, "fl3": 120, "mr1": 110, "mr2": 40, "mr3": 120, "ml1": 90, "ml2": 130, "ml3": 170, "br1": 90, "br2": 130, "br3": 170, "bl1": 110, "bl2": 40, "bl3": 120 }\n');
    }, n++ * v);
    setTimeout(() => {
      this.controlRemoto.socket.emit('execute', '{ "fr1": 90, "fr2": 130, "fr3": 170, "fl1": 90, "fl2": 40, "fl3": 120, "mr1": 90, "mr2": 40, "mr3": 120, "ml1": 90, "ml2": 130, "ml3": 170, "br1": 90, "br2": 130, "br3": 170, "bl1": 90, "bl2": 40, "bl3": 120 }\n');
    }, n++ * v);
    setTimeout(() => {
      this.controlRemoto.socket.emit('execute', '{ "fr1": 90, "fr2": 40, "fr3": 120, "fl1": 90, "fl2": 40, "fl3": 120, "mr1": 90, "mr2": 40, "mr3": 120, "ml1": 90, "ml2": 40, "ml3": 120, "br1": 90, "br2": 40, "br3": 120, "bl1": 90, "bl2": 40, "bl3": 120 }\n');
    }, n++ * v);
  }
  onDown() {
    console.log("Enviaré backward");
    this.controlRemoto.socket.emit('backward', 'desde angular, te ordeno que retrocedas');
  }
  onLeft() {
    console.log("Enviaré left");
    this.controlRemoto.socket.emit('left', 'desde angular, te ordeno que gires a la izquierda');
  }

  onRight() {
    console.log("Enviaré Right");
    this.controlRemoto.socket.emit('right', 'desde angular, te ordeno que gires a la derecha');
  }

  onHello() {
    // console.log("Enviaré Saludos");
    // this.controlRemoto.socket.emit('hello', 'desde angular, te ordeno que envies saludos');
    let n = 0;
    setTimeout(() => {
      this.controlRemoto.socket.emit('execute', '{ "fr1": 90, "fr2": 40, "fr3": 120, "fl1": 90, "fl2": 40, "fl3": 120, "mr1": 90, "mr2": 40, "mr3": 120, "ml1": 90, "ml2": 40, "ml3": 120, "br1": 90, "br2": 40, "br3": 120, "bl1": 90, "bl2": 40, "bl3": 120 }\n');
    }, n++ * 1000);
    for (let i = 0; i < 3; i++) {
      setTimeout(() => {
        this.controlRemoto.socket.emit('execute', '{ "fr1": 90, "fr2": 130, "fr3": 30, "fl1": 90, "fl2": 40, "fl3": 120, "mr1": 90, "mr2": 40, "mr3": 120, "ml1": 90, "ml2": 40, "ml3": 120, "br1": 90, "br2": 40, "br3": 120, "bl1": 90, "bl2": 40, "bl3": 120 }\n');
      }, n++ * 400);
      setTimeout(() => {
        this.controlRemoto.socket.emit('execute', '{ "fr1": 90, "fr2": 130, "fr3": 170, "fl1": 90, "fl2": 40, "fl3": 120, "mr1": 90, "mr2": 40, "mr3": 120, "ml1": 90, "ml2": 40, "ml3": 120, "br1": 90, "br2": 40, "br3": 120, "bl1": 90, "bl2": 40, "bl3": 120 }\n');
      }, n++ * 400);
    }
    setTimeout(() => {
      this.controlRemoto.socket.emit('execute', '{ "fr1": 90, "fr2": 40, "fr3": 120, "fl1": 90, "fl2": 40, "fl3": 120, "mr1": 90, "mr2": 40, "mr3": 120, "ml1": 90, "ml2": 40, "ml3": 120, "br1": 90, "br2": 40, "br3": 120, "bl1": 90, "bl2": 40, "bl3": 120 }\n');
    }, n++ * 1000);
  }

  onHello2() {
    // console.log("Enviaré Saludos");
    // this.controlRemoto.socket.emit('hello', 'desde angular, te ordeno que envies saludos');
    let n = 0;
    setTimeout(() => {
      this.controlRemoto.socket.emit('execute', '{ "fr1": 90, "fr2": 40, "fr3": 120, "fl1": 90, "fl2": 40, "fl3": 120, "mr1": 90, "mr2": 40, "mr3": 120, "ml1": 90, "ml2": 40, "ml3": 120, "br1": 90, "br2": 40, "br3": 120, "bl1": 90, "bl2": 40, "bl3": 120 }\n');
    }, n++ * 1000);
    for (let i = 0; i < 3; i++) {
      setTimeout(() => {
        this.controlRemoto.socket.emit('execute', '{ "fr1": 90, "fr2": 40, "fr3": 120, "fl1": 90, "fl2": 130, "fl3": 30, "mr1": 90, "mr2": 40, "mr3": 120, "ml1": 90, "ml2": 40, "ml3": 120, "br1": 90, "br2": 40, "br3": 120, "bl1": 90, "bl2": 40, "bl3": 120 }\n');
      }, n++ * 400);
      setTimeout(() => {
        this.controlRemoto.socket.emit('execute', '{ "fr1": 90, "fr2": 40, "fr3": 120, "fl1": 90, "fl2": 130, "fl3": 170, "mr1": 90, "mr2": 40, "mr3": 120, "ml1": 90, "ml2": 40, "ml3": 120, "br1": 90, "br2": 40, "br3": 120, "bl1": 90, "bl2": 40, "bl3": 120 }\n');
      }, n++ * 400);
    }
    setTimeout(() => {
      this.controlRemoto.socket.emit('execute', '{ "fr1": 90, "fr2": 40, "fr3": 120, "fl1": 90, "fl2": 40, "fl3": 120, "mr1": 90, "mr2": 40, "mr3": 120, "ml1": 90, "ml2": 40, "ml3": 120, "br1": 90, "br2": 40, "br3": 120, "bl1": 90, "bl2": 40, "bl3": 120 }\n');
    }, n++ * 1000);
  }

  onHappy() {
    console.log("Demostraré que estoy feliz");
    this.controlRemoto.socket.emit('happy', 'desde angular, te ordeno estes feliz');
  }

  onSleep() {
    console.log("Me iré a dormir");
    this.controlRemoto.socket.emit('sleep', 'desde angular, te ordeno que duermas');
  }

  onWakeUp() {
    console.log("me despertaré");
    this.controlRemoto.socket.emit('wakeUp', 'desde angular, te ordeno despiertes');
  }

  onSonreir() {
    this.controlRemoto.socket.emit('execute', '{"s1": "0000-0000-0102-0408","s2": "0000-0000-8040-2010","s3": "0000-0000-0102-0408", "s4": "0000-0000-8040-2010","s5": "1020-0000-0000-0000","s6": "0804-0000-0404-0300","s7": "1020-0000-2020-C000","s8": "0804-0000-0000-0000"}\n');
  }

  onTriste() {
    this.controlRemoto.socket.emit('execute', '{"s1": "0000-1010-1010-0804","s2": "0000-1010-1010-2040","s3": "0000-1010-1010-0804","s4": "0000-1010-1010-2040","s5": "0300-0000-0000-0000","s6": "8000-0003-0408-0800","s7": "0300-00C0-2010-1000","s8": "8000-0000-0000-0000"}\n');
  }

  onSerio() {
    this.controlRemoto.socket.emit('execute', '{"s1": "0000-0000-0003-0404","s2": "0000-0000-00C0-2020","s3": "0000-0000-0003-0404","s4": "0000-0000-00C0-2020","s5": "0300-0000-0000-0000","s6": "C000-0000-0F00-0000","s7": "0300-0000-F000-0000","s8": "C000-0000-0000-0000"}\n');
  }

  onCuadrado() {
    this.controlRemoto.socket.emit('execute', '{"s1": "0000-0000-0000-0000","s2": "0000-001F-1F1F-1F1F","s3": "0000-00F8-F8F8-F8F8","s4": "0000-0000-0000-0000","s5": "0000-0000-0000-0000","s6": "1F1F-1F1F-1F00-0000","s7": "F8F8-F8F8-F800-0000","s8": "0000-0000-0000-0000"}\n');
  }

  onCirculo() {
    this.controlRemoto.socket.emit('execute', '{ "fr1": 90, "fr2": 40, "fr3": 120, "fl1": 90, "fl2": 40, "fl3": 120, "mr1": 90, "mr2": 40, "mr3": 120, "ml1": 90, "ml2": 40, "ml3": 120, "br1": 90, "br2": 40, "br3": 120, "bl1": 90, "bl2": 40, "bl3": 120 }\n');
  }

  onRectangulo() {
    this.controlRemoto.socket.emit('execute', '{ "s1": "0000-003F-3F3F-3F3F", "s2": "0000-00FF-FFFF-FFFF", "s3": "0000-00FF-FFFF-FFFF", "s4": "0000-00FC-FCFC-FCFC", "s5": "3F3F-3F3F-3F00-0000", "s6": "FFFF-FFFF-FF00-0000", "s7": "FFFF-FFFF-FF00-0000", "s8": "FCFC-FCFC-FC00-0000" } { "s1": "0000-003F-3F3F-3F3F", "s2": "0000-00FF-FFFF-FFFF", "s3": "0000-00FF-FFFF-FFFF", "s4": "0000-00FC-FCFC-FCFC", "s5": "3F3F-3F3F-3F00-0000", "s6": "FFFF-FFFF-FF00-0000", "s7": "FFFF-FFFF-FF00-0000", "s8": "FCFC-FCFC-FC00-0000" } { "s1": "0000-003F-3F3F-3F3F", "s2": "0000-00FF-FFFF-FFFF", "s3": "0000-00FF-FFFF-FFFF", "s4": "0000-00FC-FCFC-FCFC", "s5": "3F3F-3F3F-3F00-0000", "s6": "FFFF-FFFF-FF00-0000", "s7": "FFFF-FFFF-FF00-0000", "s8": "FCFC-FCFC-FC00-0000" } { "s1": "0000-003F-3F3F-3F3F", "s2": "0000-00FF-FFFF-FFFF", "s3": "0000-00FF-FFFF-FFFF", "s4": "0000-00FC-FCFC-FCFC", "s5": "3F3F-3F3F-3F00-0000", "s6": "FFFF-FFFF-FF00-0000", "s7": "FFFF-FFFF-FF00-0000", "s8": "FCFC-FCFC-FC00-0000" }\n');
  }

  onTriangulo() {
    this.controlRemoto.socket.emit('execute', '{"s1": "0000-0000-0000-0000","s2": "0000-0000-0001-0307","s3": "0000-0000-0080-C0E0","s4": "0000-0000-0000-0000","s5": "0000-0000-0000-0000","s6": "0F1F-3F7F-FF00-0000","s7": "F0F8-FCFE-FF00-0000","s8": "0000-0000-0000-0000"}\n');
  }

}


