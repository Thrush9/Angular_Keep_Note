import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import 'rxjs/Rx';

@Injectable()
export class AuthenticationService {

  constructor(private httpclient: HttpClient) {

  }

  authenticateUser(data) {
    return  this.httpclient.post('http://localhost:3000/auth/v1', data);
  }

  setBearerToken(token) {
    sessionStorage.setItem('bearerToken', token);
  }

  getBearerToken() {
    return sessionStorage.getItem('bearerToken');
  }

  isUserAuthenticated(token): Promise<boolean> {
    return this.httpclient.post('http://localhost:3000/auth/v1/isAuthenticated', {},
    {
     headers : new HttpHeaders().set('Authorization', `Bearer ${token}`)
    }).map((res) => {
          return res['isAuthenticated'];
        }).toPromise();
  }
}
