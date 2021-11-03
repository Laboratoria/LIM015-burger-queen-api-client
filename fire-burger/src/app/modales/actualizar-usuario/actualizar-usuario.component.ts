import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


 import { UsersService } from 'src/app/servicios/users.service';
 import { UserI } from '../../vistas/usuarios/usuarios.model';
 

@Component({
  selector: 'app-actualizar-usuario',
  templateUrl: './actualizar-usuario.component.html',
  styleUrls: ['./actualizar-usuario.component.css'],
})
export class ActualizarUsuarioComponent implements OnInit {

  @Input() public user! : UserI;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  editForm!: FormGroup;
  public UsersList: UserI[] = [];

  constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder, private api: UsersService) {}
  
  ngOnInit(){
    this.editForm = this.formBuilder.group({
      id: [this.user._id],
      email: [this.user.email],
      password: [this.user.password],
      rolname: [this.user.roles]
    })
  }


  onSubmit() {
    console.log("onsubmit funcionando")
    this.api.updateUserService (this.editForm.value).subscribe(x => {
      this.activeModal.close('Yes');
    },
      error => {
        console.log(error)
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



//   deleteProduct(id: any) {
//     this.api
//       .deleteOneProduct(id)
//       .subscribe((res) => alert('Producto eliminado'));
//   }

//   getProduct(id: any) {
//     this.api.getOneProduct(id).subscribe((res) => {});
//   }
// }
