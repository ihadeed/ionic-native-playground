import { Component } from '@angular/core';
import {SignatureService} from "../../providers/signature";
import {NavController, NavParams, ViewController} from "ionic-angular";

@Component({
  selector: 'help-page',
  templateUrl: 'help.html'
})
export class HelpPage {

  // interfaces list
  interfaces: string[];

  // whole interface
  sig: any;

  constructor(
    private sigs: SignatureService
    , private navParams: NavParams
    , private viewCtrl: ViewController
    , private navCtrl: NavController
  ) {

    const interfaceName = navParams.get('interfaceName');

    if (interfaceName) {
      this.sig = sigs.getInterfaceSignature(interfaceName);
    } else {
      this.interfaces = sigs.getInterfaces();
    }

  }

  diveDeeper(interfaceName: string) {
    this.navCtrl.push(HelpPage, { interfaceName });
  }

  close() {
    this.viewCtrl.dismiss();
  }

}
