import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserI } from '../vistas/usuarios/usuarios.model'

@Injectable({
  providedIn: 'root'
})

export class UsersService {
   
  private token = localStorage.getItem('token');
  private config = {
      headers: {Authorization: `Bearer ${this.token}`},
    };

  constructor(private http: HttpClient) {
  }

  getUserService(): Observable<UserI[]> {
    return this.http.get<UserI[]>(
      'https://fireburguer.herokuapp.com/users',
      this.config
    );
  }

  postUserService(data: UserI): Observable<any> {
    return this.http.post<any>(
      'https://fireburguer.herokuapp.com/users',
      data,
      this.config
    );
  }

  deleteUserService(uid : any){
    return this.http.delete<UserI>('https://fireburguer.herokuapp.com/users/'+ uid, this.config)
    }

  updateUserService(data:any){
    return this.http.put<UserI>('https://fireburguer.herokuapp.com/users/'+ data.id ,data, this.config)
  }

  }