import { Component } from '@angular/core';
import {NavController, ViewController} from 'ionic-angular';
import {BarcodeScanner} from "ionic-native";

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

  constructor(
    public viewCtrl: ViewController
  ) {}

  scan() {
    console.log('Scanning');
    BarcodeScanner.scan()
      .then(console.log.bind(console))
      .catch(console.error.bind(console));
  }

  encode() {
    console.log('Encoding');
    BarcodeScanner.encode(BarcodeScanner.Encode.TEXT_TYPE, 'https://justpost.io')
      .then(console.log.bind(console))
      .catch(console.error.bind(console));
  }

}
