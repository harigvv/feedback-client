import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

export interface User {
  firstname:string;
  lastname:string;
  email:string;
  password:string;
  role:string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  FEEDBACK_CREATE_URL = environment.feedbackCreateUrl;
  CURRENT_USER_FEEDBACK_URL = environment.currentUserFeedbackUrl;
  ALL_FEEDBACK_URL = environment.allUserFeedbackUrl;

  constructor(public rest: HttpClient) {

  }


  createFeedback(feedback: { rating: string; comment: string }) {
    return this.rest.post(this.FEEDBACK_CREATE_URL, feedback);
  }

  getFeedbackForCurrentUser() {
    return this.rest.get(this.CURRENT_USER_FEEDBACK_URL);
  }

  getAllFeedbacks() {
    return this.rest.get(this.ALL_FEEDBACK_URL);
  }
}
