import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductsService } from 'src/app/servicios/products.service';
import { ProductI } from '../../vistas/productos/productos.model'

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})

export class ProductosComponent implements OnInit {
  formValue !: FormGroup;
  productModelObject : ProductI = {name: '', price: 0, type: ''};
  products: ProductI[] = [];
   
  constructor(private formbuilder: FormBuilder, private auth : ProductsService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      name : [''],
      price: [0],
      type:[''],
    })
    this.getProducts();
  }
  postProduct(){
    this.productModelObject.name = this.formValue.value.name;
    this.productModelObject.price = this.formValue.value.price;
    this.productModelObject.type = this.formValue.value.type;
     
    this.auth.postProduct(this.productModelObject)
    .subscribe(res=>{
      console.log(res);
      alert("¡Producto agregado!")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
    },
      err=>{
        alert("Ups, ocurrió un error");
      })
    console.log(this.productModelObject);
  }

  getProducts(){
    this.auth.getProduct().subscribe(res => {
      this.products = res;
    })
  }

  deleteProduct(id: any){
    this.auth.deleteOneProduct(id).subscribe(res =>
      alert('Producto eliminado'));
  }
}