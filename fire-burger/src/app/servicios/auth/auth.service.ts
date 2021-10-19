import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private Url = 'https://fireburguer.herokuapp.com/auth'
  private objectAuth = {
    'email': '',
    'password': ''
  }
  constructor(private http: HttpClient) { }
  Auth(user: any): Observable<any> {
    this.objectAuth['email']= user.email;
    this.objectAuth['password']= user.password;
    return this.http.post(this.Url, this.objectAuth);
  } 
}
