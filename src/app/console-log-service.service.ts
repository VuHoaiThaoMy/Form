import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsoleLogServiceService {
  constructor() { }
  serviceproperty = "Service Created";
  showTodayDate() {
    let today = new Date();
    return today;
  }
}
