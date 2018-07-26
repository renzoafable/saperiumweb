import { Injectable } from '@angular/core';
import { HttpClient } from '../../../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getHome() {
    const url = `http://localhost:3001/api/home`;
    return this.http.get(url);
  }
}
