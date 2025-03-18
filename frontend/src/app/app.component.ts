import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLinkActive, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PikkyPad';
  loggedIn = false;
  tokenKey = 'aurhToken';
  constructor(private http:HttpClient, private router:Router){}

  ngOnInit() {

    this.loggedIn = !!localStorage.getItem('token')
  }

  logOut(){
    const token =localStorage.getItem(this.tokenKey);
    if(token) {
      const headers =new HttpHeaders().set('Authorization', `Bearer ${token}`);
      this.http.post('/logout', {},{headers}).subscribe(()=>{
        localStorage.removeItem(this.tokenKey);
        this.router.navigate(['/welcome']);
      })
    }
  }

}
