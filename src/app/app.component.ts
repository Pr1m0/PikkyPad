import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomePublicComponent } from "./components/home-public/home-public.component";
import { AuthapiService } from "./services/authapi.service";

@Component({
  selector: 'app-root',
  imports: [ HomePublicComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PikkyPad';
  loggedIn = false;

  constructor(private authapi: AuthapiService) {}

  ngOnInit() {
    this.loggedIn = this.authapi.isLoggedIn()
  }
  
  
}

