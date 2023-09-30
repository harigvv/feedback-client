import { Component } from '@angular/core';
import {UserService} from "../../services/user-service/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent {

  feedback = {
    email:'',
    rating:'',
    comment:'',
    timestamp:''
  }
  loading = false;
  errorMessage: string = ''

  constructor(private userService: UserService, private router: Router) {

  }

  submitFeedback() {
    if(!this.feedback.rating  || !this.feedback.comment) {
      this.errorMessage = "Rating or Comment at least 1 field required"
    }
    this.loading = true;
    console.log("feedback will be submitted: ",this.feedback)
    this.userService.createFeedback(this.feedback).subscribe(data => {
      console.log("submitted", data);
      this.loading = false;
      this.router.navigate(['dashboard'])
    }, err => {
      this.loading = false;
      console.error("Error", err)
    })
  }
}
