import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ProductI } from '../vistas/productos/productos.model'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
   
   

  constructor(private http: HttpClient) {
    

  }

  getProduct(): Observable<ProductI[]> {
    const token = localStorage.getItem('token');
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
    const token = localStorage.getItem('token');
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
    const token = localStorage.getItem('token');
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    return this.http.delete<ProductI>('https://fireburguer.herokuapp.com/products/'+ uid, config)
    }

  updateOneProduct(uid : any){
    console.log(uid);
    
    const token = localStorage.getItem('token');
    console.log(token);
    
    const config = {
      headers: { Authorization: `Bearer ${token}`},
    };
    return this.http.put<ProductI>('https://fireburguer.herokuapp.com/products/'+ uid._id , {price: 100}, config)
  }  
  }