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
      res => this.showMessage(
        "Your coordinates are: " + res.coords.latitude + "," + res.coords.longitude
      ),
      err => this.showError(err)
    );

  }


  /**
   * show action sheet
   */
  actionsheet () : void {
    let buttonLabels = ['Share via Facebook', 'Share via Twitter'];
    ActionSheet.show({
         'title': 'What do you want with this image?',
         'buttonLabels': buttonLabels,
         'addCancelButtonWithLabel': 'Cancel',
         'addDestructiveButtonWithLabel' : 'Delete'
       }).then(buttonIndex => {
         console.log('Button pressed: ' + buttonLabels[buttonIndex - 1]);
       });
  }

  showMessage(message : string) : void {

    this.nav.present(
      Alert.create({
        message: message,
        buttons: ['OK']
      })
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
