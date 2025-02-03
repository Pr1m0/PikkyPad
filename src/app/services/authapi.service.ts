import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthapiService {

  constructor(private http: HttpClient) { }

  register(data: any) {
    const url = 'http://localhost:8000/api/register'
    return this.http.post(url, data);
  }

  login(data: any) {
    const url = 'http://localhost:8000/api/login'
    return this.http.post(url, data);
  }

  logout() {
    const url = 'http://localhost:8000/api/logout';
    return this.http.post(url, {headers: this.makeHeader()});
  }

  isLoggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }

  makeHeader() {
    const token = localStorage.getItem('token');
    const header = { 'Authorization': 'Bearer ' + token }
    return header
  }  

}

