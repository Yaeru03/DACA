import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Constants } from '../constants';
import { Subject, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ControlRemotoService {
  public socket;

  constructor() {
    this.socket = io(Constants.HOST_SOCKETIO);
    this.socket.on('disconnect', data => {
      console.log("It is disconnected");
      // this.socket.emit('authenticate', localStorage.getItem('token'));
      // console.log("authenticating again");
    });
  }
}
