import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'}),
  withCredentials: true
};

@Injectable({
  providedIn: 'root'
})
export class ContactusService {

  constructor(private http: HttpClient) { }

  getContactUs(): Observable<any> {
    const url = `http://localhost:3001/api/contactUs/`;
    return this.http.get(url).pipe(catchError( (error) => {
      return throwError(error);
    }));
  }

  getPhones(): Observable<any> {
    const url = `http://localhost:3001/api/contactUs/phones`;
    return this.http.get(url).pipe(catchError( (error) => {
      return throwError(error);
    }));
  }

  editContactUs(title: string, address: string, body: string) {
    return this.http.put('http://localhost:3001/api/contactUs/',
    {title: title, address: address, body: body}, httpOptions)
    .pipe(catchError( (error) => {
      return throwError(error);
    }));
  }

  addMessage(email: string, fn: string, ln: string, body: string) {
    return this.http.post('http://localhost:3001/api/contactUs/messages',
    {email: email, first_name: fn, last_name: ln, body: body}, httpOptions)
    .pipe(catchError( (error) => {
      return throwError(error);
    }));
  }

}
