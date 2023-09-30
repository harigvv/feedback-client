import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user-service/user.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit{

  feedbacks:any[] = [];
  loading = false;
  dataAvailable = false;

  constructor(private userService: UserService) {

  }

  ngOnInit(): void {

  }
  loadAllFeedbacks(){
    this.loading = true;
    this.userService.getAllFeedbacks().subscribe((data:any) => {
      console.log("data", data);
      this.feedbacks = data || [];
      this.dataAvailable=true;
      this.loading = false;
    }, error => {
      console.log("err", error);
      this.loading = false;
    })
  }

}
