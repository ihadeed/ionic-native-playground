import { Component } from '@angular/core';


import {Calendar} from "@ionic-native/calendar";
@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html'
})
export class CalendarPage {

  constructor(public plugin: Calendar) {}

}
