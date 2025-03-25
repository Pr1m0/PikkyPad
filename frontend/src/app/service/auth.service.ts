import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
   
   
  constructor(private http: HttpClient) { }


  login(userData: any) {
    return this.http.post('http://localhost:8000/api/login', userData);
  }
  register(data: any) {
   
    return this.http.post('http://localhost:8000/api/register', data);

  }
  logout(){
    const url = 'http://localhost:8000/api/logout';
    return this.http.post(url, null, this.makeHeader());
  } 

  makeHeader() {
    return{
    headers :{
      'Authorization' : 'Bearer ' + localStorage.removeItem('token')
    }
    }
  }
  isLoggedIn() {
    return !!localStorage.getItem('token');
  }
  }

