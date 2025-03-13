import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
   
    
  constructor(private http: HttpClient) { }


  login(username: string,password: string) {
    return this.http.post('http://localhost:8000/api/login', {"username":username,"passord": password});
  }
  register(data: any) {
    const url = 'http://localhost:8000/api/register';
    return this.http.post(url, data);

  }
  logout(){
    const url = 'http://localhost:8000/api/logout';
    return this.http.post(url, null, this.makeHeader());
  }

  makeHeader() {
    return{
    headers :{
      'Authorization' : 'Bearer ' + localStorage.getItem('token')
    }
    }
  }
  isLoggedIn() {
    return!!localStorage.getItem('token');
  }
  }

