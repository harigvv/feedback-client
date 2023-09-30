import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "./services/auth-service/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'feedback-client';

  currentUser: any;

  constructor(
    private router: Router,
    private auth: AuthService
  ) {
    this.auth.currentUser.subscribe(x => this.currentUser = x);
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }

  isAdmin() {
    return this.currentUser && this.currentUser.role === 'ADMIN';
  }

  getUserFullName() {
    if(this.auth.currentUser) {
      return this.currentUser.firstName + " " + this.currentUser.lastName;
    }
    return '';
  }

  getUserEmail() {
    if(this.auth.currentUser) {
      return this.currentUser.email;
    }
    return '';
  }
}
