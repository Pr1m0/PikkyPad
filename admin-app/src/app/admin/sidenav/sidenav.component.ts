import { Component } from '@angular/core';
import { faHome, faUser, faChild, faAdd, faSignOut, faDotCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {


  faHome = faHome;
  faUser = faUser;
  faChild = faChild;
  faAdd=faAdd;
  faDot=faDotCircle
  logout=faSignOut;

  constructor() { }
}
