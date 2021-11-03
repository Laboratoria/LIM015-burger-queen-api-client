import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserI } from './usuarios.model';
import { UsersService } from 'src/app/servicios/users.service';
import { ActualizarUsuarioComponent } from 'src/app/modales/actualizar-usuario/actualizar-usuario.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  formValue !: FormGroup;
  public userModel : UserI = {email: '', password: '', roles:{name:'seleccione la categoria', admin: false}};
  public usersList: UserI[] = [];
  

  constructor(
    private formbuilder: FormBuilder,
    private api : UsersService,
    private modalService: NgbModal
    ) { }

  ngOnInit(): void {
    console.log(this.usersList)
    this.formValue = this.formbuilder.group({
      email : [''],
      password: [''],
      rolname:[''],
      admin: false
    })
    this.setUserList();
  }

  
  postUserDetails(){
    this.userModel.email = this.formValue.value.email;
    this.userModel.password = this.formValue.value.password;
    this.userModel.roles.name = this.formValue.value.rolname;
    this.userModel.roles.admin = this.formValue.value.admin;
  
    this.api.postUserService(this.userModel)
    .subscribe(res=>{
      console.log(res);
      alert("¡Usuario agregado!")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.setUserList()
    },
      err=>{
        alert("Ups, ocurrió un error");
      })
    console.log(this.userModel);

  }

    setUserList() {
    this.api.getUserService().subscribe((res) => {
      this.usersList = res;
    });
  }
  
  cancelUserDetails(){
    this.formValue.reset();
  }

    openEditModal(userModel: UserI) {
    const modalRef = this.modalService.open(ActualizarUsuarioComponent);
    modalRef.componentInstance.user= userModel;
    // modalRef.componentInstance.passEntry.subscribe((receivedEntry:any) => {
    //   console.log(receivedEntry);
    // })
    modalRef.result.then((yes) => {
      console.log("Yes Click");

      this.setUserList();
    },
      (cancel) => {
        console.log("Cancel Click");

      })
  }

  deleteUser(id: any){
    this.api.deleteUserService(id).subscribe(res =>
      alert('Usuario eliminado'));
     this.setUserList();
  }
}