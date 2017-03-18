import { Component } from '@angular/core';
import {CardIOOptions, CardIO} from "@ionic-native/card-io";

@Component({
  selector: 'page-card-io',
  templateUrl: 'card-io.html'
})
export class CardIOPage {

  result;
  error;

  constructor(
    private cardIO: CardIO
  ) {}

  scanCard() {

    const options: CardIOOptions = {
      requireCardholderName: true,
      requireExpiry: true,
      requirePostalCode: true,
      requireCVV: true,
      keepApplicationTheme: true
    };

    this.cardIO.canScan().then(canScan => {

      if (canScan) {

        this.cardIO.scan(options)
          .then(v => this.result = v)
          .catch(v => this.error = v);

      } else {

        this.error = 'Cannot scan';
        console.log('Cant scan');
      }

    }).catch(e => this.error = e);

  }

}
