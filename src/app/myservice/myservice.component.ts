import { Component, OnInit } from '@angular/core';
import { ConsoleLogServiceService } from '../console-log-service.service';

@Component({
  selector: 'app-myservice',
  templateUrl: './myservice.component.html',
  styleUrls: ['./myservice.component.css']
})
export class MyserviceComponent implements OnInit {
  myservice = "My Service";
  todayDate: Date;
  property: string;
  constructor(private consolelogservice: ConsoleLogServiceService) {}
  ngOnInit() {
    this.todayDate = this.consolelogservice.showTodayDate();
    this.property = this.consolelogservice.serviceproperty;
  }
}
