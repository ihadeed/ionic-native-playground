import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import {CardIOOptions, CardIO} from "ionic-native";

/*
  Generated class for the CardIO page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-card-io',
  templateUrl: 'card-io.html'
})
export class CardIOPage {

  constructor(public viewCtrl: ViewController) {}

  scanCard() {

    const options: CardIOOptions = {
      requireCardholderName: true,
      requireExpiry: true,
      requirePostalCode: true,
      requireCVV: true,
      keepApplicationTheme: true
    };

    CardIO.canScan().then(canScan => {

      if (canScan) {

        CardIO.scan(options)
          .then(console.log.bind(console))
          .catch(console.error.bind(console));

      } else {
        console.log('Cant scan');
      }

    }).catch(console.error.bind(console));

  }

}
