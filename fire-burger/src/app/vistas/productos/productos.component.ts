import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActualizarProductoComponent } from 'src/app/modales/actualizar-producto/actualizar-producto.component';
import { ProductsService } from 'src/app/servicios/products.service';
import { ProductI } from '../../vistas/productos/productos.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent implements OnInit {
  formValue!: FormGroup;
  public productModel: ProductI = { name: '', price: 0, type: '' };
  public productsList: ProductI[] = [];

  constructor(
    private formbuilder: FormBuilder,
    private api: ProductsService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      name: [''],
      price: [0],
      type: [''],
    });
    this.setProductsList();
  }
  postProduct() {
    this.productModel.name = this.formValue.value.name;
    this.productModel.price = this.formValue.value.price;
    this.productModel.type = this.formValue.value.type;

    this.api.postProduct(this.productModel).subscribe(
      (res) => {
        console.log(res);
        alert('¡Producto agregado!');
        let ref = document.getElementById('cancel');
        ref?.click();
        this.formValue.reset();
        this.setProductsList();
      },
      (err) => {
        alert('Ups, ocurrió un error');
      }
    );
    console.log(this.productModel);
  }

  setProductsList() {
    this.api.getProduct().subscribe((res) => {
      this.productsList = res;
    });
  }

  deleteProduct(id: any) {
    this.api
      .deleteOneProduct(id)
      .subscribe((res) => alert('Producto eliminado'));
  }


  openEditModal(product: ProductI) {
    const modalRef = this.modalService.open(ActualizarProductoComponent);
    modalRef.componentInstance.product= product;
    // modalRef.componentInstance.passEntry.subscribe((receivedEntry:any) => {
    //   console.log(receivedEntry);
    // })
    modalRef.result.then((yes) => {
      console.log("Yes Click");

      this.setProductsList();
    },
      (cancel) => {
        console.log("Cancel Click");

      })
  }

}

 