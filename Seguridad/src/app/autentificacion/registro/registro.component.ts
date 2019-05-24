import { AuthService } from './../../servicios/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '../../../../node_modules/@angular/forms';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private authService: AuthService
  ) { 
    this.form=this.fb.group({
      name: ['', Validators.required], 
      lastName: ['', Validators.required], 
      secondLastName: ['', Validators.required], 
      id: ['', Validators.required], 
      email: ['', Validators.required], 
      confirmPassword: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  Registro() {
    console.log(this.form.value);

    let val = this.form.value;

    if(val.name && val.lastName && val.secondLastName && val.id && val.email && val.password && val.confirmPassword){
      console.log("OK");
      this.authService.Registro(val.name, val.lastName, val.secondLastName, val.id, val.email, val.password, val.confirmPassword).subscribe(
        info => {
          // localStorage.setItem('token', info.token)
          // console.log(info.token)
        },
        error => console.log("tengo un problema", error),
        () => {
          console.log("listooo")
        }
      )
    }
  }

}
