import {Page, NavController, Alert} from 'ionic-angular';
// Import used plugins from Ionic Native library
import {
  ActionSheet,
  AppAvailability,
  AppRate,
  AppVersion,
  Badge,
  BarcodeScanner,
  Base64ToGallery,
  BatteryStatus,
//BLE,
  Calendar,
  Camera,
  Contacts,
  DatePicker,
  Device,
//Facebook,
  Geolocation,
  //Push,
  StatusBar,
  Toast,
  //TouchID,
} from '../../../ionic-native-dev/index';

@Page({
  templateUrl: 'build/pages/main/main.html',
})
export class MainPage {

  private outputCollapsedEh : boolean = true;
  private outputContent : string = "No content available at the moment.";

  constructor(private nav : NavController) {
    console.log("platform is", Device.device);
  }

  toggleOutput () : void {
    console.log("Output toggled.");
    this.outputCollapsedEh = !this.outputCollapsedEh;
  }

  /**
   * update output
   * @param input
   */
  updateOutput (input : any, error? : boolean) : void {
    this.outputContent = '';
    if (error) this.outputContent += '<strong>ERROR</strong>';

    if (typeof input == 'string') {
      this.outputContent += input;
    }else if (typeof input == 'object') {
      this.outputContent += this.objectToHtml(input);
    } else {
      console.warn("You haven't thought of this type: ", typeof input, input);
    }

    // Uncollapse output if it's collapsed :)

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
      err => this.updateOutput(err, true)
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
      'addDestructiveButtonWithLabel' : 'Delete',
      'androidTheme' : 5, // THEME_DEVICE_DEFAULT_LIGHT
    }).then(buttonIndex => {
      console.log('Button pressed: ' + buttonLabels[buttonIndex - 1]);
    });
  }

  /**
   * Take a photo
   */
  camera () : void {

    let options = {
      targetWidth: 500,
      destinationType: 0
    };

    Camera.getPicture(options)
    .then(
      (photo : any) => this.updateOutput('<img src="data:image/jpeg;base64,'+photo+'" alt="" />'),
      (error : string) => this.updateOutput(error, true)
    );

  }

  /**
   * Scans a barcode then outputs data
   */
  barcodescanner () : void {
    BarcodeScanner.scan().then(
      barcodeData => this.updateOutput(barcodeData),
      error => this.updateOutput(error, true)
    )
  }

  batterystatus () : void {
    this.updateOutput("Watching the battery level for one minute. This will update once the battery level has been retrieved.");
    let sub = BatteryStatus.onChange().subscribe(
      status => this.updateOutput("Watching the battery level for one minute.<br>Current battery level is " + status.level + ". Plugged-in: " + status.isPlugged)
    );

    setTimeout(()=>sub.unsubscribe(), 60000); // Cancel watch in a minute

  }

  datepicker () : void {

  }

  toast () : void {

  }

  device () : void {

  }


}
