import { Component } from '@angular/core';
import {CallNumber} from "@ionic-native/call-number";


@Component({
  selector: 'page-call-number',
  templateUrl: 'call-number.html'
})
export class CallNumberPage {

  constructor(public plugin: CallNumber) { }

}
