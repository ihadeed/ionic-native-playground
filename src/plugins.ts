import _ from 'lodash';
import {CameraPage} from "./pages/camera/camera";
import {ActionSheetPage} from "./pages/action-sheet/action-sheet";
import {BarcodeScannerPage} from "./pages/barcode-scanner/barcode-scanner";
import {BatteryStatusPage} from "./pages/battery-status/battery-status";
import {BrightnessPage} from "./pages/brightness/brightness";
import {CardIOPage} from "./pages/card-io/card-io";
import {ClipboardPage} from "./pages/clipboard/clipboard";
import {ContactsPage} from "./pages/contacts/contacts";
import {DevicePage} from "./pages/device/device";
import {DeviceAccountsPage} from "./pages/device-accounts/device-accounts";
import {MarketPage} from "./pages/market/market";
import {KeyboardPage} from "./pages/keyboard/keyboard";
import {GooglePlusPage} from "./pages/google-plus/google-plus";
import {GoogleMapsPage} from "./pages/google-maps/google-maps";
import {GeolocationPage} from "./pages/geolocation/geolocation";
import {DiagnosticPage} from "./pages/diagnostic/diagnostic";
import {AndroidFingerprintAuthPage} from "./pages/android-fingerprint-auth/android-fingerprint-auth";
import {AppRatePage} from "./pages/app-rate/app-rate";
import {BadgePage} from "./pages/badge/badge";
import {AppAvailability} from "@ionic-native/app-availability";
import {AppAvailabilityPage} from "./pages/app-availability/app-availability";


class Plugin {
  constructor(
    public name: string,
    public component: any
  ){}
}


const plugins = [
  new Plugin('Action Sheet', ActionSheetPage),
  new Plugin('Barcode Scanner', BarcodeScannerPage),
  new Plugin('Battery Status', BatteryStatusPage),
  new Plugin('Brightness', BrightnessPage),
  new Plugin('Camera', CameraPage),
  new Plugin('CardIO', CardIOPage),
  new Plugin('Clipboard', ClipboardPage),
  new Plugin('Contacts', ContactsPage),
  new Plugin('Device', DevicePage),
  new Plugin('Device Accounts', DeviceAccountsPage),
  new Plugin('Market', MarketPage),
  new Plugin('Keyboard', KeyboardPage),
  new Plugin('Google Plus', GooglePlusPage),
  new Plugin('Google Maps', GoogleMapsPage),
  new Plugin('Geolocation', GeolocationPage),
  new Plugin('Diagnostic', DiagnosticPage),
  new Plugin('Android Fingerprint Auth', AndroidFingerprintAuthPage),
  new Plugin('App Rate', AppRatePage),
  new Plugin('Badge', BadgePage),
  new Plugin('App Availability', AppAvailabilityPage)
];

export default _.sortBy(plugins, ['name']);

