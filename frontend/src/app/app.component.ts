import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLinkActive, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PikkyPad';
  loggedIn = false;

  ngOnInit() {

    this.loggedIn = !!localStorage.getItem('token')
  }

  logOut(){
    localStorage.removeItem('token');
  }
}
