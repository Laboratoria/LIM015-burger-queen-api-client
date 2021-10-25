import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router, private api: AuthService) { }

  ngOnInit(): void {
  }
  btnLogout(){
    this.api.logout();
  }
}
