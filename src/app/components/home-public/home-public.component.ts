import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { LoginComponent } from "../login/login.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home-public',
  imports: [NavbarComponent, LoginComponent, FooterComponent],
  templateUrl: './home-public.component.html',
  styleUrls: ['./home-public.component.css']
  
})
export class HomePublicComponent {

}
