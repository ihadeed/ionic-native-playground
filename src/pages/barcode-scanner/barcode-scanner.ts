import { Component } from '@angular/core';
import {BarcodeScanner, BarcodeScannerOptions} from "@ionic-native/barcode-scanner";

@Component({
  selector: 'page-barcode-scanner',
  templateUrl: 'barcode-scanner.html'
})
export class BarcodeScannerPage {

  result;
  error;

  scanConfig: BarcodeScannerOptions = {
    preferFrontCamera: false,
    showFlipCameraButton: true,
    showTorchButton: true,
    disableAnimations: false,
    disableSuccessBeep: false,
    prompt: 'Scan any barcode!',
    formats: '',
    orientation: 'landscape',
    torchOn: false,
    resultDisplayDuration: 3
  };

  constructor(
    private barcodeScanner: BarcodeScanner
  ) {}

  scan() {
    this.barcodeScanner.scan(this.scanConfig)
      .then(v => this.result = v)
      .catch(e => this.error = e);
  }

  encode() {
    this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE, 'https://justpost.io')
      .then(v => this.result = v)
      .catch(e => this.error = e);
  }

}
