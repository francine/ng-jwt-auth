import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthHttp } from 'angular2-jwt';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  jwt: string;
  decodedJwt: string;

  constructor(public router: Router, public authHttp: AuthHttp) {
    this.jwt = localStorage.getItem('id_token');
    //this.decodedJwt = this.jwt && window.jwt_decode(this.jwt);
  }

  logout() {
    localStorage.removeItem('id_token');
    this.router.navigate(['login']);
  }

  ngOnInit() {
    console.log('Na Home');
  }

}
