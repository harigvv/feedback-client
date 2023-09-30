import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user-service/user.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  feedbacks:any[] = [];
  loading = false;

  constructor(private userService: UserService) {

  }


  ngOnInit(): void {
    console.log("I am going to work")
    this.loading = true;
    this.userService.getFeedbackForCurrentUser().subscribe((data:any) => {
      console.log("data", data);
      this.feedbacks = data || [];
      this.loading = false;
    }, error => {
      console.log("err", error);
      this.loading = false;
    })
  }

}
