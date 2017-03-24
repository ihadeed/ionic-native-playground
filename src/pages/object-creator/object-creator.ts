import { Component } from '@angular/core';
import { NavParams, ViewController, AlertController, ModalController } from 'ionic-angular';
import { ObjectCreator } from '../../object-creator.class';

@Component({
  selector: 'object-creator',
  templateUrl: 'object-creator.html'
})
export class ObjectCreatorPage extends ObjectCreator {

  constructor(
    navParams: NavParams
    , viewCtrl: ViewController
    , alertCtrl: AlertController
    , modalCtrl: ModalController
  ) {
    super(navParams, viewCtrl, alertCtrl, modalCtrl);
    const value = navParams.get('value');
    if (value) {
      try {
        this.values = JSON.parse(value);
      } catch (e) {
        console.log(e);
      }
    }
  }

  save() {
    if (this.type == 'object') {
      const obj = {};
      this.items.forEach((item, i) => {
        obj[item.name] = this.values[i];
      });
      this.viewCtrl.dismiss(JSON.stringify(obj));
    } else {
      this.viewCtrl.dismiss(JSON.stringify(this.values));
    }
  }



}
