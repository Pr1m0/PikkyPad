import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data: any = null;

  setData(data: any) {
    this.data = data;
  }

  getData(): any {
    return this.data;
  }

  constructor() { }
}
