import { AuthService } from './../../servicios/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '../../../../node_modules/@angular/forms';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private authService: AuthService
  ) { 
    this.form=this.fb.group({
      email: ['', Validators.required], 
      password: ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  logIn() {
    console.log(this.form.value);

    let val = this.form.value;

    if(val.email && val.password){
      console.log("OK");
      this.authService.logIn(val.email, val.password).subscribe(
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
