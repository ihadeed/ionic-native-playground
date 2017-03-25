import { Component } from '@angular/core';
import {AlertController, ModalController, NavParams, ViewController} from 'ionic-angular';
import { ObjectCreator } from '../../object-creator2.class';
import {HelpPage} from "../help/help";

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
      this.signature.params.forEach(param => {
        console.log(param);
        this._addItem(this.parseType(param.type), null, param.name);
      });
    }

  }

  private parseType(type: string) {

    // lets start with string as default type
    if (!type) return 'string';

    // first things first
    type = type.toLowerCase();

    switch (type) {
      case 'string':
      case 'number':
      case 'boolean':
        // no processing needed
        return type;

      default:
        // check if array
        if (type.indexOf('[]') > -1 || type.indexOf('array') > -1) return 'array';
        // if it's none of the above, it's probably a custom type, which is most likely an object
        else return 'object';
    }

  }

  save() {
    const params = this.values.map((p, i) => {
      switch (this.items[i].type) {
        case 'number':
          return Number(p);
        case 'object':
          try {
            return JSON.parse(p);
          } catch (e) {}
          break;
        case 'boolean':
          return Boolean(p);
      }
      return p;
    });
    console.log('Returning params', params);
    this.viewCtrl.dismiss(params);
  }

  showHelp() {
    this.modalCtrl.create(HelpPage).present();
  }

}
