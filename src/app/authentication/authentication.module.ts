import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './authentication.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AuthenticationComponent, LoginComponent],
  exports: [AuthenticationModule]
})
export class AuthenticationModule { }
