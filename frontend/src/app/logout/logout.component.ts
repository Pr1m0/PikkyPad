import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

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

  ngOnInit() {
    this.router.navigate(['/home']);
  }
  ngOnDestroy() {
    this.app.loggedIn = false;
    this.auth.logout().subscribe({
      next:(data)=>{
        console.log(data);
        localStorage.removeItem('token'),
        this.router.navigate(['/login']);
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
}
