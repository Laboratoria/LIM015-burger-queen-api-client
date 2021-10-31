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
  public product: ProductI = { name: '', price: 0, type: '' };
  public products: ProductI[] = [];

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
    this.getProducts();
  }
  postProduct() {
    this.product.name = this.formValue.value.name;
    this.product.price = this.formValue.value.price;
    this.product.type = this.formValue.value.type;

    this.api.postProduct(this.product).subscribe(
      (res) => {
        console.log(res);
        alert('¡Producto agregado!');
        let ref = document.getElementById('cancel');
        ref?.click();
        this.formValue.reset();
        this.getProducts();
      },
      (err) => {
        alert('Ups, ocurrió un error');
      }
    );
    console.log(this.product);
  }

  getProducts() {
    this.api.getProduct().subscribe((res) => {
      this.products = res;
    });
  }

  deleteProduct(id: any) {
    this.api
      .deleteOneProduct(id)
      .subscribe((res) => alert('Producto eliminado'));
  }


openEditModal() {
  const modalRef = this.modalService.open(ActualizarProductoComponent);
  modalRef.componentInstance.product= this.product;
  modalRef.componentInstance.passEntry.subscribe((receivedEntry:any) => {
    console.log(receivedEntry);
  })
}

}

 