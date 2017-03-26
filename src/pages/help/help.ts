import { Component } from '@angular/core';
import {SignatureService} from "../../providers/signature";
import { NavController, NavParams, ViewController } from "ionic-angular";
import _ from 'lodash';

@Component({
  selector: 'help-page',
  templateUrl: 'help.html'
})
export class HelpPage {

  // interfaces list
  interfaces: any[];

  filteredInterfaces: any[];

  // whole interface
  sig: any;

  isChild: boolean = false;

  constructor(
    private sigs: SignatureService
    , private navParams: NavParams
    , private viewCtrl: ViewController
    , private navCtrl: NavController
  ) {
    this.init();
  }

  async init() {
    let interfaceName = this.navParams.get('interfaceName');

    this.isChild = this.navParams.get('isChild') == true;

    if (interfaceName && !this.sigs.interfaceExists(interfaceName)) {
      interfaceName = undefined;
    }

    if (interfaceName) {
      this.sig = await this.sigs.getInterfaceSignature(interfaceName);
    } else {
      this.interfaces = this.sigs.getInterfaces();
      this.resetInterfaces();
    }
  }

  onSearchInput(ev: any) {
    let val = _.toLower(ev.target.value);
    if (val && val.trim() != '') {
      this.filteredInterfaces = this.interfaces.filter(item => _.toLower(item.name).indexOf(val) > -1 || _.toLower(item.parent).indexOf(val) > -1);
    } else this.resetInterfaces();
  }

  resetInterfaces() {
    this.filteredInterfaces = this.interfaces;
  }

  diveDeeper(interfaceName: string) {
    this.navCtrl.push(HelpPage, { interfaceName, isChild: true });
  }

  close() {
    this.viewCtrl.dismiss();
  }

}
