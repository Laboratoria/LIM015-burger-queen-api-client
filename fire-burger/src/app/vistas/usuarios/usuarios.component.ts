import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/servicios/auth/auth.service';
import { UserRequest } from './usuarios.model';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
   
  formValue !: FormGroup;
  userModelObject : UserRequest = {email: '', password: ''};
  userData !: any;
  constructor(private formbuilder: FormBuilder,
    private auth : AuthService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      email : [''],
      password: ['']
    })
    this.getUsers();
  }
  postUserDetails(){
    this.userModelObject.email = this.formValue.value.email;
    this.userModelObject.password = this.formValue.value.password;
  
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
    console.log(this.userModelObject);
    
  }

  getUsers(){
    this.auth.getUser().subscribe(result => {
      console.log(result);
    })
  }
 /* getAllUsers(){
    this.auth.getUser()
    .subscribe(res: any =>{
    this.userData = res;
    })
  }*/
}
