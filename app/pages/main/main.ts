import {Page, NavController, Alert} from 'ionic-angular';
// Import used plugins from Ionic Native library
import {
ActionSheet,
AppRate,
AppVersion,
Badge,
BarcodeScanner,
//BLE,
Calendar,
Camera,
Contacts,
DatePicker,
Device,
//Facebook,
Geolocation,
Push,
StatusBar,
Toast,
TouchID,
} from 'ionic-native';

@Page({
  templateUrl: 'build/pages/main/main.html',
})
export class MainPage {

  constructor(private nav : NavController) {}

  /**
   * Tests the geolocation
   */
  geolocation () {

    Geolocation.getCurrentPosition().then(
      res => this.showError(res),
      err => this.showError(err)
    );

  }

  showError(errorMessage : string) {

    this.nav.present(
      Alert.create({
        title : 'Error',
        message : errorMessage,
        buttons: ['OK']
      })
    );

  }

}
