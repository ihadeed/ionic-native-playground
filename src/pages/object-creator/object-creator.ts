import { Component } from '@angular/core';
import {NavParams, ViewController, AlertController, ModalController, IonicPage} from 'ionic-angular';
import { ObjectCreator } from '../../object-creator';
import _ from 'lodash';
import {SignatureService} from "../../providers/signature";

@IonicPage({
  name: 'object-creator'
})
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
    , sig: SignatureService
  ) {
    super(navParams, viewCtrl, alertCtrl, modalCtrl);
    const value = navParams.get('value');

    this.actualType = navParams.get('actualType');

    if (value && value != this.getDefaultValue(this.type)) {

      try {
        // const parsed = JSON.parse(value);
        const parsed = value;

        for (let prop in parsed) {
          let propType: string = typeof parsed[prop];
          if (propType === 'object' && _.isArray(parsed[prop])) propType = 'array';
          this.items.push({
            name: prop,
            type: propType
          });
          this.values.push(parsed[prop]);
        }

      } catch (e) {
        console.log(e);
      }
    } else if (this.actualType) {
      sig.getInterfaceProperties(this.actualType)
        .then(props => {
          props.forEach(prop => this._addItem(this.parseType(prop.type), null, prop.name, prop.type))
        }).catch(_.noop);
    }

  }

  save() {

    if (this.type == 'object') {
      let obj = {};
      this.items.forEach((item, i) => obj[item.name] = this.values[i]);
      this.viewCtrl.dismiss(obj);
    } else {
      this.viewCtrl.dismiss(this.values);
    }

  }



}
