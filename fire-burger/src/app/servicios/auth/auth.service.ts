import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


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
  postUser(data : any){
    return this.http.post<any>('https://fireburguer.herokuapp.com/users', data)
    .pipe(map((res:any)=>{
      return res;
    }))
  } 
  getUser(){
    return this.http.get<any>('https://fireburguer.herokuapp.com/users')
    .pipe(map((res:any)=>{
      return res;
    }))
  } 
  updateUser(data : any, id : number){
    return this.http.put<any>('https://fireburguer.herokuapp.com/users/'+id, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  } 
  deleteUser(id : number){
    return this.http.delete<any>('https://fireburguer.herokuapp.com/users/'+ id)
    .pipe(map((res:any)=>{
      return res;
    }))
  } 
}
