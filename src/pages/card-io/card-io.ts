import { Component } from '@angular/core';
import {CardIOOptions, CardIO} from "@ionic-native/card-io";

@Component({
  selector: 'page-card-io',
  templateUrl: 'card-io.html'
})
export class CardIOPage {

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
          .then(console.log.bind(console))
          .catch(console.error.bind(console));

      } else {
        console.log('Cant scan');
      }

    }).catch(console.error.bind(console));

  }

}
