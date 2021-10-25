import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../servicios/auth/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  
  constructor(private AuthService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.useLocalStorage();
  }
  useLocalStorage() {
    if (localStorage.getItem('token')) {
      this.router.navigate(['/menu']);
    }
  }
  login() {
    this.AuthService.Auth(this.loginForm.value).subscribe(
      (data) => {
        localStorage.setItem('token', data.token);
        console.log('success', data);
        this.router.navigate(['/menu']);
        //console.log(this.loginFormYup.value);
      },
      (error) => {
        if (error.status > 400) {
          alert('Datos incorrectos');
        } else if (error.status == 400) {
          alert('Datos incompletos');
        }
      }
    );
  }

  
}
