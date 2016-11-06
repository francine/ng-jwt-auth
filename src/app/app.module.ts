import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './authentication/login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthenticationGuard } from './authentication/authentication.guard';
import { AuthenticationService } from './authentication/authentication.service';

import { AUTH_PROVIDERS } from 'angular2-jwt';

import { routes } from './app.routes';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  providers: [
    AuthenticationService,
    AuthenticationGuard,
    AUTH_PROVIDERS
  ]
})
export class AppModule { }
