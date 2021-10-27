import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ProductI } from '../vistas/productos/productos.model'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProduct(): Observable<ProductI[]> {
    let token = localStorage.getItem('token');
    //const headers = new HttpHeaders({'Authorization': `Bearer ${token}`})
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    console.log(token);
    return this.http.get<ProductI[]>(
      'https://fireburguer.herokuapp.com/products',
      config
    );
  }

  postProduct(data: ProductI): Observable<any> {
    console.log(data);
    let token = localStorage.getItem('token');
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    return this.http.post<any>(
      'https://fireburguer.herokuapp.com/products',
      data,
      config
    );
  }

  deleteOneProduct(uid : any){
    let token = localStorage.getItem('token');
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    return this.http.delete<ProductI>('https://fireburguer.herokuapp.com/products/'+ uid, config)
    }
  }