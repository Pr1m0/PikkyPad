import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from './service/auth.service';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLinkActive, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PikkyPad';
  loggedIn = false;
  tokenKey = 'authToken';
  constructor(private http:HttpClient, private router:Router,private auth:AuthService){}

  ngOnInit() {

   
    this.loggedIn = !!localStorage.getItem('token');
  }

 
 
 }


