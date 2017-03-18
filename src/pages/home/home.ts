import { Component, NgZone } from '@angular/core';

import { NavController } from 'ionic-angular';

import Plugins from '../../plugins';
import {ActionSheetPage} from "../action-sheet/action-sheet";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  plugins = Plugins;

  constructor(
    private navCtrl: NavController
  ) {

    console.log('is home in angular zone', NgZone.isInAngularZone());

  }

  show(plugin: any) {
    this.navCtrl.push(plugin.component);
  }

}

