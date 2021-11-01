import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
 import { ProductsService } from 'src/app/servicios/products.service';
 import { ProductI } from '../../vistas/productos/productos.model';


@Component({
  selector: 'app-actualizar-producto',
  templateUrl: './actualizar-producto.component.html',
  styleUrls: ['./actualizar-producto.component.css'],
})
export class ActualizarProductoComponent implements OnInit {

  @Input() public product! : ProductI;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  editForm!: FormGroup;
  // products: ProductI[] = [];

  constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder, private api: ProductsService) {}
  ngOnInit(){
    console.log("Hola",this.product);
    this.editForm = this.formBuilder.group({
      name: [this.product.name],
      price: [this.product.price, Validators.required],
      type:[this.product.type, Validators.required]
    })
  }
  updateProduct() {
    
    this.activeModal.close(this.product);
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
