import { Injectable } from '@angular/core';
import { User } from '../datamodel/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {

  private userUrl = "http://localhost/thatsmyband-slim/thatsmyband-back/public_html/userdata";

  constructor(private http: HttpClient) { }

  getUser() : Observable<User> {
  	return this.http.get<User>(this.userUrl).pipe();
  }
}
