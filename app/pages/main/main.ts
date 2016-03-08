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

  private outputCollapsedEh : boolean = true;
  private outputContent : string = "No content available at the moment.";

  constructor(private nav : NavController) {}

  toggleOutput () : void {
    console.log("Output toggled.");
    this.outputCollapsedEh = !this.outputCollapsedEh;
  }

  /**
   * update output
   * @param input
   */
  updateOutput (input : any) : void {
    if (typeof input == 'string') {
      this.outputContent = input;
    }else if (typeof input == 'object') {
      this.outputContent = this.objectToHtml(input);
    } else {
      console.warn("You haven't thought of this type: ", typeof input, input);
    }

    // Uncollapse output if it's collapsed
    if(this.outputCollapsedEh) this.toggleOutput();
  }

  /**
   * convert JS object to HTML list
   * @param object
   */
  objectToHtml(object) : string {
    console.log("converting object", object);
    let ot : string = '<ul>';
    for (let property in object) {
      ot += '<li><strong>';
      ot += property;
      ot += '</strong> ';
      if(object[property] === null) {
        ot += 'NULL';
      } else if(typeof object[property] == 'object') {
        ot += this.objectToHtml(object[property]);
      } else {
        ot += object[property]
      }

      ot += '</li>';
    }
    ot += '</ul>';

    return ot;
  }

  /**
   * Tests the geolocation
   */
  geolocation () {

    Geolocation.getCurrentPosition().then(
      res => this.updateOutput(res),
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
