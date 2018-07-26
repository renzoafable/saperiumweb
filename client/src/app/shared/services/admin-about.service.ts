import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminAboutService {

  constructor(private httpClient : HttpClient) { }

  viewAbout(){
    return this.httpClient.get<any>('http://localhost:3001/api/about/');
  }
  
  editAbout(title: String, body: String){
    const values = {
      title: title, body: body
    }
    return this.httpClient.put<any>('http://localhost:3001/api/about/', values);
  }

  editTestimonial(testimonial_id: Number, note: String, name: String, title: String, file_path: String){
    const values = {
      testimonial_id: testimonial_id, note: note, name: name, title: title, file_path: file_path
    }
    return this.httpClient.put<any>('http://localhost:3001/api/about/testimonial', values);
  }

}
