import { Component } from '@angular/core';
import {User, UserService} from "../../services/user-service/user.service";
import {AuthService} from "../../services/auth-service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  user:User = {
    firstname:'',
    lastname:'',
    email:'',
    password:'',
    role:'USER'
  }

  error: boolean = false;
  errorMessage:string = ''

  constructor(private auth: AuthService, private router: Router) {
  }
  createAccount() {
    this.auth.createAccount(this.user).subscribe((data:any) => {
      this.error = false;
      if(!data.error) {
        console.log("Account created", data);
        this.auth.storeData(data);
        this.router.navigate(['dashboard']);
      }
      else {
        this.error = true;
        this,this.errorMessage = data.error;
        console.error("Error while creating account", data.error);
      }
    }, err => {
      console.error("Error while creating account", err);
    })

  }
}
