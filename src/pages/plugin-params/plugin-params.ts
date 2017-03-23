import { Component } from '@angular/core';
import {AlertController, NavController, NavParams, ViewController} from 'ionic-angular';

/*
  Generated class for the PluginParams page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-plugin-params',
  templateUrl: 'plugin-params.html'
})
export class PluginParamsPage {

  paramsWithTypes: { type: string }[] = [];

  params: any[] = [];

  constructor(private viewCtrl: ViewController, private alertCtrl: AlertController) {}

  addParam() {
    this.alertCtrl.create({
      title: 'Pick type of param',
      inputs: [
        {
          type: 'radio',
          label: 'Boolean',
          value: 'boolean'
        },
        {
          type: 'radio',
          label: 'Number',
          value: 'number'
        },
        {
          type: 'radio',
          label: 'Text',
          value: 'text'
        },
        {
          type: 'radio',
          label: 'Object',
          value: 'object'
        }
      ],
      buttons: [
        'Cancel',
        {
          text: 'Add',
          handler: type => {
            this.paramsWithTypes.push({ type });
            switch (type) {
              case 'boolean':
                this.params.push(false);
                break;
              case 'number':
                this.params.push(0);
                break;
              case 'text':
                this.params.push('');
                break;
              case 'object':
                this.params.push('');
                break;
            }
          }
        }
      ]
    }).present();
  }

  reorderParams(indexes) {

    const el1 = this.paramsWithTypes[indexes.from],
      el2 = this.params[indexes.from];

    this.paramsWithTypes.splice(indexes.from, 1);
    this.params.splice(indexes.from, 1);

    this.paramsWithTypes.splice(indexes.to, 0, el1);
    this.params.splice(indexes.to, 0, el2);

  }


  removeItem(index) {
    this.paramsWithTypes.splice(index, 1);
    this.params.splice(index, 1);
  }


  dismiss() {
    const params = this.params.map((p, i) => {
      switch (this.paramsWithTypes[i].type) {
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

}
