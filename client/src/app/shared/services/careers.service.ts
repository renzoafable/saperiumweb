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
}
