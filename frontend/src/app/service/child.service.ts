import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ChildService {

  constructor(
    private http:HttpClient,
    private auth:AuthService
  ) { }


  getChild(){
    let url ='http://localhost:8000/api/children';
    return this.http.get(url);
  }
  addChild(data:any){
    let url = 'http://localhost:8000/api/children';
    return this.http.post(url,data, this.auth.makeHeader());
  }
  updateChild(data:any){
    let url = 'http://localhost:8000/api/children';
    return this.http.put(url,data,this.auth.makeHeader())
  }

  deleteChild(id:number){
    let url = 'http://localhost:8000/api/children' ;
    return this.http.delete(url,this.auth.makeHeader())
  }
}
