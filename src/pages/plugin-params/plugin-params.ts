import { Component } from '@angular/core';
import {AlertController, ModalController, NavParams, ViewController} from 'ionic-angular';
import { ObjectCreator } from '../../object-creator';

@Component({
  selector: 'page-plugin-params',
  templateUrl: 'plugin-params.html'
})
export class PluginParamsPage extends ObjectCreator {

  constructor(
    navParams: NavParams
    , viewCtrl: ViewController
    , alertCtrl: AlertController
    , modalCtrl: ModalController
  ) {
    super(navParams, viewCtrl, alertCtrl, modalCtrl);

    if (this.signature) {
      this.signature.params.forEach(param => this._addItem(this.parseType(param.type), null, param.name, param.type, param.optional));
    }

  }

  save() {
    const params = this.values.map((p, i) => {
      switch (this.items[i].type) {
        case 'number':
          return Number(p);
        case 'boolean':
          return Boolean(p);
      }
      return p;
    });
    this.viewCtrl.dismiss(params);
  }

}
