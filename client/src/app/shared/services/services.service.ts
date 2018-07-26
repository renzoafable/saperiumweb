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
export class ServicesService {

  constructor(private http: HttpClient) { }

  getServices(): Observable<any> {
    console.log('in');
    const url = `http://localhost:3001/api/services/getServices`;
    return this.http.get(url).pipe(catchError( (error) => {
      return throwError(error);
    }));
  }

  editServices(title: string, body: string) {
    return this.http.put('http://localhost:3001/api/services/editServices',
    {title: title, body: body}, httpOptions)
    .pipe(catchError( (error) => {
      return throwError(error);
    }));
  }
}
