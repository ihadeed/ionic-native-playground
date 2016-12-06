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
    private modalCtrl: ModalController
  ) {}

  show(plugin: any) {
    this.modalCtrl.create(plugin.component).present();
  }

}

