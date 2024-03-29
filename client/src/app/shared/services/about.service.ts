import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor(private httpClient : HttpClient) { }

  viewAbout(){
    return this.httpClient.get<any>('http://localhost:3001/api/about/');
  }
}
