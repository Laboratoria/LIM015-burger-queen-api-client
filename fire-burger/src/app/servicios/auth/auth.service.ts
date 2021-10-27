import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { EmailValidator } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private Url = 'https://fireburguer.herokuapp.com/auth'
  private objectAuth = {
    'email': '',
    'password': ''
  }
  constructor(private http: HttpClient, private router: Router) { }
  Auth(user: any): Observable<any> {
    this.objectAuth['email']= user.email;
    this.objectAuth['password']= user.password;
    return this.http.post(this.Url, this.objectAuth);
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }

   getUser(){
    let token = localStorage.getItem('token')
    //const headers = new HttpHeaders({'Authorization': `Bearer ${token}`})
    const config = {
    headers: {'Authorization': `Bearer ${token}`}
    };
    console.log(token);
    
    return this.http.get('https://fireburguer.herokuapp.com/users',config)
    .pipe(map((res)=>{
      return  console.log(res);
    }))
  }
  

  postUser(data : any): Observable<any>{
    console.log(data);
    let token = localStorage.getItem('token')
    let body = {
      'email': data.usuario,
      'password': data.constrasena,
      'roles': data.cargo,
      'roles.admin': false
    }
    const config = {
      headers: {'Authorization': `Bearer ${token}`}
      };
  return this.http.post<any>('https://fireburguer.herokuapp.com/users', body , config);
  } 

  // updateUser(data : any, id : number){
  //   return this.http.put<any>('https://fireburguer.herokuapp.com/users/'+id, data)
  //   .pipe(map((res:any)=>{
  //     return res;
  //   }))
  // } 
  // deleteUser(id : number){
  //   return this.http.delete<any>('https://fireburguer.herokuapp.com/users/'+ id)
  //   .pipe(map((res:any)=>{
  //     return res;
  //   }))
  // }
}
