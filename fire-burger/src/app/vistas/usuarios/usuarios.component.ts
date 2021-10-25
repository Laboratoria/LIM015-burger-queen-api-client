import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/servicios/auth/auth.service';
import { UserModel } from './usuarios.model';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
   
  formValue !: FormGroup;
  userModelObject : UserModel = new UserModel();
  userData !: any;
  constructor(private formbuilder: FormBuilder,
    private auth : AuthService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      usuario : [''],
      contrasena: [''],
      cargo : [''],
      admin : [''],
    })
    //this.getAllUsers();
  }
  postUserDetails(){
    this.userModelObject.usuario = this.formValue.value.usuario;
    this.userModelObject.contrasena = this.formValue.value.contrasena;
    this.userModelObject.cargo = this.formValue.value.cargo;
    this.userModelObject.admin = this.formValue.value.admin;

    this.auth.postUser(this.userModelObject)
    .subscribe(res=>{
      console.log(res);
      alert("¡Usuario agregado!")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
    },
      err=>{
        alert("Ups, ocurrió un error");
      })
  }

  
 /* getAllUsers(){
    this.auth.getUser()
    .subscribe(res: any =>{
    this.userData = res;
    })
  }*/
}
