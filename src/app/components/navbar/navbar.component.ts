import { Component } from '@angular/core';
import { AuthapiService } from '../../services/authapi.service'; 
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
   title = 'PikkyPad';
   loggedIn = false;
 
 constructor(private authapi: AuthapiService) {}
   ngOnInit() {
   this.loggedIn = this.authapi.isLoggedIn()
  }
}
