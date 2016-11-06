import {Injectable} from '@angular/core';

import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthenticationService {
  constructor() {}

  loggedIn() {
    return tokenNotExpired();
  }
}
