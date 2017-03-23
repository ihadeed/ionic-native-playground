import { Component } from '@angular/core';
import {AppPreferences} from "@ionic-native/app-preferences";

@Component({
  selector: 'page-app-preferences',
  templateUrl: 'app-preferences.html'
})
export class AppPreferencesPage {

  constructor(public plugin: AppPreferences){}

}
