import { Component } from '@angular/core';
import {BarcodeScanner} from "@ionic-native/barcode-scanner";


@Component({
  selector: 'page-barcode-scanner',
  templateUrl: 'barcode-scanner.html'
})
export class BarcodeScannerPage {

  result;
  error;

  constructor(
    private barcodeScanner: BarcodeScanner
  ) {}

  scan() {
    console.log('Scanning');
    this.barcodeScanner.scan()
      .then(v => this.result = v)
      .catch(e => this.error = e);
  }

  encode() {
    console.log('Encoding');
    this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE, 'https://justpost.io')
      .then(v => this.result = v)
      .catch(e => this.error = e);
  }

}
