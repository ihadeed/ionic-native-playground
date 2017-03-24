import { Component } from '@angular/core';
import { DatePicker } from '@ionic-native/date-picker';
@Component({
  selector: 'page-date-picker',
  templateUrl: 'date-picker.html'
})
export class DatePickerPage {

  constructor(public plugin: DatePicker) {}

}
