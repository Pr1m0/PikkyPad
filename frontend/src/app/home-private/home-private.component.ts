import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home-private',
  imports: [],
  templateUrl: './home-private.component.html',
  styleUrl: './home-private.component.css'
})
export class HomePrivateComponent {

  img:string ='assets/img/letölés.jpg';

  constructor(private router:Router) { }
  ngOnInit() {
    
  }
  eredmeny(){

    this.router.navigate(['/goal']); 
  }
}
