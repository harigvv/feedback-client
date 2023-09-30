import {Component, Input, OnInit} from '@angular/core';
import {Timestamp} from "rxjs";

@Component({
  selector: 'app-feedback-table',
  templateUrl: './feedback-table.component.html',
  styleUrls: ['./feedback-table.component.scss']
})
export class FeedbackTableComponent implements OnInit{

  @Input()
  feedbacks:any[] = [];


  ngOnInit(): void {}

  getDate(timestamp:any) {
    return new Date(timestamp).toString().substring(4,24)
  }
}
