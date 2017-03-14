import { Component } from '@angular/core';
import {BarcodeScanner} from "@ionic-native/barcode-scanner";


@Component({
  selector: 'page-barcode-scanner',
  templateUrl: 'barcode-scanner.html'
})
export class BarcodeScannerPage {

  constructor(
    private barcodeScanner: BarcodeScanner
  ) {}

  scan() {
    console.log('Scanning');
    this.barcodeScanner.scan()
      .then(console.log.bind(console))
      .catch(console.error.bind(console));
  }

  encode() {
    console.log('Encoding');
    this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE, 'https://justpost.io')
      .then(console.log.bind(console))
      .catch(console.error.bind(console));
  }

}
