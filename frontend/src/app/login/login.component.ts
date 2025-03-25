import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm !:any;

  constructor(
    private http: HttpClient,
     private router: Router, 
     private auth:AuthService,
    private builder : FormBuilder,
    private app : AppComponent) {}
     
  // }
  ngOnInit(){
    this.loginForm = this.builder.group({
      name:[""],
      password:[""]
    })
  }

  

  onSubmit() {
    console.log(this.loginForm.value)
    this.auth.login( this.loginForm.value)
      .subscribe({
        next:(body:any) => {
        localStorage.setItem('token', body.data.token);
        this.router.navigate(['/home-private']); // Átirányítás a védett oldalra
          this.app.loggedIn = true;
       },
        error:(err) => {
          console.log(err)
        }
       }
       );
  }

}


