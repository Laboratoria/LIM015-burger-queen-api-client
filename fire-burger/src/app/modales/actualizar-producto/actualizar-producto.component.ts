import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductsService } from 'src/app/servicios/products.service';
import { ProductI } from '../../vistas/productos/productos.model'


@Component({
  selector: 'app-actualizar-producto',
  templateUrl: './actualizar-producto.component.html',
  styleUrls: ['./actualizar-producto.component.css'],
})
export class ActualizarProductoComponent implements OnInit {
  editForm!: FormGroup;
  selectedProduct: ProductI = { name: '', price: 0, type: '' };
  products: ProductI[] = [];

  constructor(public modal: NgbActiveModal, private formBuilder: FormBuilder, private api: ProductsService) {}
  ngOnInit(){
    this.setForm();
  }
  private setForm() {
    console.log(this.selectedProduct);
    this.editForm = this.formBuilder.group({
    name: [this.selectedProduct.name],
    price: [this.selectedProduct.price, Validators.required],
    type: [this.selectedProduct.type, Validators.required],
  });
}
}
//   ngOnInit(): void {
//     this.formValue = this.formbuilder.group({
//       name: [''],
//       price: [0],
//       type: [''],
//     });
//     this.getProducts();
//   }
//   postProduct() {
//     this.productModelObject.name = this.formValue.value.name;
//     this.productModelObject.price = this.formValue.value.price;
//     this.productModelObject.type = this.formValue.value.type;

//     this.api.postProduct(this.productModelObject).subscribe(
//       (res) => {
//         console.log(res);
//         alert('¡Producto agregado!');
//         let ref = document.getElementById('cancel');
//         ref?.click();
//         this.formValue.reset();
//         this.getProducts();
//       },
//       (err) => {
//         alert('Ups, ocurrió un error');
//       }
//     );
//     console.log(this.productModelObject);
//   }

//   getProducts() {
//     this.api.getProduct().subscribe((res) => {
//       this.products = res;
//     });
//   }

//   deleteProduct(id: any) {
//     this.api
//       .deleteOneProduct(id)
//       .subscribe((res) => alert('Producto eliminado'));
//   }

//   getProduct(id: any) {
//     this.api.getOneProduct(id).subscribe((res) => {});
//   }
// }
