import { Component } from '@angular/core';

import {NavController, ModalController} from 'ionic-angular';

import Plugins from '../../plugins';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  plugins = Plugins;

  constructor(
    private modalCtrl: ModalController,
    private navCtrl: NavController
  ) {

    setTimeout(() => {
      this.show(this.plugins[this.plugins.length - 1]);
    }, 1000);

  }

  show(plugin: any) {
    this.navCtrl.push(plugin.component);
  }

}

