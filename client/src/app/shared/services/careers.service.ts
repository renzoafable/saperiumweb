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
export class CareersService {

  constructor(private http: HttpClient) { }

  getCareers(): Observable<Object> {
    const url = `http://localhost:2001/getCareers`;
    return this.http.get(url).pipe(catchError( (error) => {
      return throwError(error);
    }));
  }

  editCareers(title: string, body: string) {
    return this.http.put('http://localhost:2001/editCareers',
    {title: title, body: body}, httpOptions)
    .pipe(catchError( (error) => {
      return throwError(error);
    }));
  }
}
