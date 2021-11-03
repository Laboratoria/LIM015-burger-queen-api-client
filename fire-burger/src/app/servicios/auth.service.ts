import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private Url = 'https://fireburguer.herokuapp.com/auth';
  private objectAuth = {
    email: '',
    password: '',
  };
  constructor(private http: HttpClient, private router: Router) {}
  Auth(user: any): Observable<any> {
    this.objectAuth['email'] = user.email;
    this.objectAuth['password'] = user.password;
    return this.http.post(this.Url, this.objectAuth);
  }
  
  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }

}