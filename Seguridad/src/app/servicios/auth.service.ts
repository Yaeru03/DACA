import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) { }

  logIn(email: string, password: string) {

    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    const body = new HttpParams()
      .set('email', email)
      .set('password', password);

    return this.http.post(`http://192.168.1.73:3000/api/client/login`, body.toString(), { headers: headers })
  }

  Registro(name: string, lastName: string, secondLastName: string, id: string, email: string, password: string, confirmPassword: string) {

    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    const body = new HttpParams()
      .set('name', name)
      .set('lastName', lastName)
      .set('secondLastName', secondLastName)
      .set('id', id)
      .set('email', email)
      .set('password', password)
      .set('confirmPassword', confirmPassword);

    return this.http.post(`http://192.168.1.73:3000/api/client/registro`, body.toString(), { headers: headers })
  }
}
