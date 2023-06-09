import { Component, OnInit } from '@angular/core';
import { ConsoleLogServiceService } from './console-log-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title: any;
  todayDate: Date;
  property: string;
  constructor(private consolelogservice: ConsoleLogServiceService) {}
  ngOnInit() {
    this.todayDate = this.consolelogservice.showTodayDate();
    this.consolelogservice.serviceproperty = "Form Fills Your Informations."
    this.property = this.consolelogservice.serviceproperty;
  }
}

