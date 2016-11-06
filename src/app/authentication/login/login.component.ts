import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-content',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {

  constructor(public router: Router, public http: Http) {
  }

  login(event, username, password) {
    console.log('logar');
    console.log('username ', username);
    console.log('password ', password);

    // let basicOptions: RequestOptionsArgs = {
    //   url: 'http://172.27.0.106:90/Vortex/Rest/Status',
    //   search: null,
    //   method: 'get',
    //   headers: contentHeaders,
    //   body: null
    // };

    // event.preventDefault();
    // this.http.get('http://www.google.com')
    //   .subscribe(
    //     response => {
    //       localStorage.setItem('id_token', response.json().id_token);
    //       this.router.navigate(['home']);
    //     },
    //     error => {
    //       console.log(error.text());
    //       localStorage.setItem('id_token', 'response.json().id_toke');
    //       this.router.navigate(['home']);
    //     }
    //   );

    localStorage.setItem('id_token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ');
    this.router.navigate(['home']);
  }

}
