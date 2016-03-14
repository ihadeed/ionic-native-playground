import {Page, NavController, Alert} from 'ionic-angular';
import {Observable} from 'rxjs/Observable';
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
import {StatusObject} from "../../../ionic-native-dev/plugins/batterystatus";

@Page({
  templateUrl: 'build/pages/main/main.html',
})
export class MainPage {

  private outputCollapsedEh : boolean = true;
  private outputContent : string = "No content available at the moment.";
  private batteryLevelSubscription : any;

  private plugins : Array<any> = [

    {
      name: 'Geolocation',
      icon: 'navigate',
      action: () => this.geolocation()
    },

    {
      name: 'Action Sheet',
      icon: 'list',
      action: () => this.actionsheet()
    },

    {
      name: 'Camera',
      icon: 'camera',
      action: () => this.camera()
    },

    {
      name: 'Barcode Scanner',
      icon: 'camera',
      action: () => this.barcodescanner()
    },

    {
      name: 'Battery Status',
      icon: 'battery-full',
      action: () => this.batterystatus()
    }


  ];

  constructor(private nav : NavController) {
    console.log("platform is", Device.device);
  }

  more () : void {
    this.nav.present(Alert.create({
      title: 'About',
      body: 'This application was created by Ibrahim Hadeed',
      buttons: [
        'Close',
        {
          text: 'View Github Profile',
          handler: () => {
            // TODO open inappbrowser here
          }
        }
      ]
    }));
  }

  toggleOutput () : void {
    console.log("Output toggled.");
    this.outputCollapsedEh = !this.outputCollapsedEh;
  }

  /**
   * update output
   * @param input {any}
   * @param error {boolean}
   */
  updateOutput (input : any, error? : boolean) : void {
    console.log("Updating output");

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

  /**
   * Watch / Stop watch on battery status
   */
  batterystatus () : void {
    if(this.batteryLevelSubscription) {
      this.batteryLevelSubscription.unsubscribe();
      this.batteryLevelSubscription = null;
      this.updateOutput("Cancelled battery status watch.");
      return;
    }
    this.updateOutput("Watching the battery level for one minute. You will be notified with changes.<br>Press the Battery status button again to cancel the watch.");
    this.batteryLevelSubscription = BatteryStatus.onChange().subscribe(
      data => Toast.show("Battery level: " + data.level + ". Is plugged in: " + data.isPlugged, "4000", "center").subscribe()
    );

  }

  datepicker () : void {
    DatePicker.show({mode: 'datetime', date: new Date()}).then(
      res => this.updateOutput(res),
      err => this.updateOutput(err, true)
    )
  }

  /**
   * Show a toast
   */
  toast () : void {
    Toast.show('Hello world!', '2000', 'center').subscribe();
  }

  device () : void {

  }


}
