import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the BarcodeScanner page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-barcode-scanner',
  templateUrl: 'barcode-scanner.html'
})
export class BarcodeScannerPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello BarcodeScannerPage Page');
  }

}
