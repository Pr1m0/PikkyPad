import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-login',
  imports: [FormsModule,HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  // constructor(
  //   private authService:AuthService,
  //   private builder:FormBuilder,
  //   private app:AppComponent){}
  // ngOnInit() {

  //   this.authService.login("","").subscribe({
  //     next :(body: any) => {
  //       console.log(body.data.token);
  //       localStorage.setItem('token', body.data.token);
   
  //     },
  //     error:(err) => {
  //       console.log(err);
  //     }
  //   })
  // }
  // login(){
  
    
  // }
  user = {
    name: '',
    password: ''
  };

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    this.http.post('http://localhost:8000/api/login', this.user)
      .subscribe((response: any) => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/home-private']); // Átirányítás a védett oldalra
      // }, error => {
      //   console.log(error);
       }
      );
  }
}



