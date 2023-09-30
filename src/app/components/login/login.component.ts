import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth-service/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  user = {
    email:'',
    password:''
  }
  errorMessage:string = ''

  constructor(private http : HttpClient, private router : Router, private auth: AuthService) { }

  ngOnInit(): void {
    if(this.auth.currentUser) {
      this.router.navigate(['dashboard']);
    }
  }


  login(userData: any) {
    this.errorMessage = '';
    this.auth.login(userData).subscribe(data => {
      console.log("success", data);
      this.router.navigate(['dashboard']);
    }, err => {
      this.errorMessage = "Invalid Credentials"
      console.log("error: ", err);
    });
  }
}
