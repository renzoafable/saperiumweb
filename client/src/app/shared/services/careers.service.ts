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

  getCareers(): Observable<any> {
    const url = `http://localhost:3001/api/careers/getCareers`;
    return this.http.get(url).pipe(catchError( (error) => {
      return throwError(error);
    }));
  }

  editCareers(title: string, body: string) {
    return this.http.put('http://localhost:3001/api/careers/editCareers',
    {title: title, body: body}, httpOptions)
    .pipe(catchError( (error) => {
      return throwError(error);
    }));
  }
}
