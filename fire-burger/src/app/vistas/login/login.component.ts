import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms'
import { AuthService } from '../../servicios/auth/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm = new FormGroup({
    email: new FormControl('',Validators.required),
    password : new FormControl('',Validators.required)
  })


  constructor(private AuthService: AuthService) { }

  ngOnInit(): void {
  }
  login(){
    this.AuthService.Auth(this.loginForm.value).subscribe(obs=> console.log(obs))
    //console.log(this.loginFormYup.value);
  }
}
