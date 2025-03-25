import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { RouterTestingHarness } from '@angular/router/testing';

@Component({
  selector: 'app-logout',
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {

  constructor(
    private auth : AuthService,
    private router : Router,
    private app: AppComponent
  ){ }

  ngOnInit(){
    this.router.navigate(['/login'])
  }
  
  ngOnDestroy() {
    this.app.loggedIn = false;
    localStorage.removeItem('token');
    
    this.auth.logout().subscribe({
      next:()=>{
        console.log("Sikeres kijelentkezés");
        localStorage.removeItem('token');
      },
      error:(err)=>{
        if (err.status === 401) {
          console.warn('Server already logged out');}
        },
        complete:()=>{
          this.router.navigate(['/login']);
        }

    })
  }
}
