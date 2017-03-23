import { Component, NgZone } from '@angular/core';
import {NavController, NavParams, Platform} from 'ionic-angular';
import { Diagnostic } from '@ionic-native/diagnostic';

@Component({
  selector: 'page-diagnostic',
  templateUrl: 'diagnostic.html'
})
export class DiagnosticPage {

  result;
  error;

  onSuccess = res => this.result = res;
  onError = e => this.error = e;

  constructor(public diagnostic: Diagnostic) {}

}
