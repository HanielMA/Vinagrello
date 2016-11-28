import { Injectable } from '@angular/core';
import { Http, JsonpModule, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../shared/classes/User';

@Injectable()
export class UserInfoService {

  constructor(private http: Http) { }

  getUser(): Observable<User> {
    return this.http.get('/api/me').map(res => <User>res.json());
  }
}
