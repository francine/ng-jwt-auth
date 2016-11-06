import { Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { AuthenticationGuard } from './authentication/authentication.guard';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '',       component: LoginComponent },
  { path: 'login',  component: LoginComponent },
  { path: 'home',  component: HomeComponent, canActivate: [AuthenticationGuard] },
  { path: '**',     component: LoginComponent }
];
