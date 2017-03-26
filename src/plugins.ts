import _ from 'lodash';
import { CameraPage } from './pages/camera/camera';
import { ActionSheetPage } from './pages/action-sheet/action-sheet';
import { BarcodeScannerPage } from './pages/barcode-scanner/barcode-scanner';
import { BrightnessPage } from './pages/brightness/brightness';
import { ContactsPage } from './pages/contacts/contacts';
import { GoogleMapsPage } from './pages/google-maps/google-maps';

import { AppAvailability } from '@ionic-native/app-availability';
import { DynamicPluginPage } from './pages/dynamic-plugin/dyanmic-plugin';
import { Diagnostic } from '@ionic-native/diagnostic';
import { AndroidFingerprintAuth } from '@ionic-native/android-fingerprint-auth';
import { Badge } from '@ionic-native/badge';
import { BrowserTab } from '@ionic-native/browser-tab';
import { Calendar } from '@ionic-native/calendar';
import { CallNumber } from '@ionic-native/call-number';
import { DatePicker } from '@ionic-native/date-picker';
import { AppRate } from '@ionic-native/app-rate';
import { AppPreferences } from '@ionic-native/app-preferences';
import { Device } from '@ionic-native/device';
import { BatteryStatus } from '@ionic-native/battery-status';
import { BackgroundGeolocation } from '@ionic-native/background-geolocation';
import { AdMob } from '@ionic-native/admob';
import { AppVersion } from '@ionic-native/app-version';
import { DBMeter } from '@ionic-native/db-meter';
import { DeviceMotion } from '@ionic-native/device-motion';
import { DeviceOrientation } from '@ionic-native/device-orientation';
import { Dialogs } from '@ionic-native/dialogs';
import { FileChooser } from '@ionic-native/file-chooser';
import { Flashlight } from '@ionic-native/flashlight';
import { Globalization } from '@ionic-native/globalization';
import { Gyroscope } from '@ionic-native/gyroscope';
import { SMS } from '@ionic-native/sms';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { Vibration } from '@ionic-native/vibration';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { Geolocation } from '@ionic-native/geolocation';
import { DeviceAccounts } from '@ionic-native/device-accounts';
import { Clipboard } from '@ionic-native/clipboard';
import { Market } from '@ionic-native/market';
import { Keyboard } from '@ionic-native/keyboard';
import { GooglePlus } from '@ionic-native/google-plus';
import { CardIO } from '@ionic-native/card-io';

class Plugin {
  constructor(
    public name: string,
    public component: any,
    public params?: any
  ) {
    if (params) {
      this.params.sig = this.params.provider.getPluginName().replace(/\s/g, '');
      this.params.name = name;
    }
  }
}


const plugins = [
  new Plugin('Action Sheet', ActionSheetPage),
  new Plugin('Barcode Scanner', BarcodeScannerPage),
  new Plugin('Battery Status', DynamicPluginPage, { provider: BatteryStatus, sig: 'battery-status' }),
  new Plugin('Brightness', BrightnessPage),
  new Plugin('Camera', CameraPage),
  new Plugin('CardIO', DynamicPluginPage, { provider: CardIO, sig: 'card-io' }),
  new Plugin('Clipboard', DynamicPluginPage, { provider: Clipboard, sig: 'clipboard' }),
  new Plugin('Contacts', ContactsPage),
  new Plugin('Device', DynamicPluginPage, { provider: Device, sig: 'device' }),
  new Plugin('Device Accounts', DynamicPluginPage, { provider: DeviceAccounts, sig: 'device-accounts' }),
  new Plugin('Market', DynamicPluginPage, { provider: Market, sig: 'market' }),
  new Plugin('Keyboard', DynamicPluginPage, { provider: Keyboard, sig: 'keyboard' }),
  new Plugin('Google Plus', DynamicPluginPage, { provider: GooglePlus, sig: 'google-plus' }),
  new Plugin('Google Maps', GoogleMapsPage),
  new Plugin('Geolocation', DynamicPluginPage, { provider: Geolocation, sig: 'geolocation' }),
  new Plugin('Diagnostic', DynamicPluginPage, { provider: Diagnostic, sig: 'diagnostic' }),
  new Plugin('Android Fingerprint Auth', DynamicPluginPage, { provider: AndroidFingerprintAuth, sig: 'android-fingerprint-auth' }),
  new Plugin('App Rate', DynamicPluginPage, { provider: AppRate, sig: 'app-rate' }),
  new Plugin('Badge', DynamicPluginPage, { provider: Badge, sig: 'badge' }),
  new Plugin('App Availability', DynamicPluginPage, { provider: AppAvailability, sig: 'app-availability' }),
  new Plugin('Browser Tab', DynamicPluginPage, { provider: BrowserTab, sig: 'browser-tab' }),
  new Plugin('Calendar', DynamicPluginPage, { provider: Calendar, sig: 'calendar' }),
  new Plugin('Call Number', DynamicPluginPage, { provider: CallNumber, sig: 'call-number' }),
  new Plugin('Date Picker', DynamicPluginPage, { provider: DatePicker, sig: 'date-picker' }),
  new Plugin('App preferences', DynamicPluginPage, { provider: AppPreferences, sig: 'app-preferences' }),
  new Plugin('AdMob', DynamicPluginPage, { provider: AdMob, sig: 'admob' }),
  new Plugin('Background Geolocation', DynamicPluginPage, { provider: BackgroundGeolocation, sig: 'background-geolocation' }),
  new Plugin('App Version', DynamicPluginPage, { provider: AppVersion, sig: 'app-version' }),
  new Plugin('DB Meter', DynamicPluginPage, { provider: DBMeter, sig: 'db-meter' }),
  new Plugin('Device Motion', DynamicPluginPage, { provider: DeviceMotion, sig: 'device-motion' }),
  new Plugin('Device Orientation', DynamicPluginPage, { provider: DeviceOrientation, sig: 'device-orientation' }),
  new Plugin('Dialogs', DynamicPluginPage, { provider: Dialogs, sig: 'dialogs' }),
  new Plugin('File Chooser', DynamicPluginPage, { provider: FileChooser, sig: 'file-chooser' }),
  new Plugin('Flashlight', DynamicPluginPage, { provider: Flashlight, sig: 'flashlight' }),
  new Plugin('Globalization', DynamicPluginPage, { provider: Globalization, sig: 'globalization' }),
  new Plugin('Gyroscope', DynamicPluginPage, { provider: Gyroscope, sig: 'gyroscope' }),
  new Plugin('SMS', DynamicPluginPage, { provider: SMS, sig: 'sms' }),
  new Plugin('Text to Speech', DynamicPluginPage, { provider: TextToSpeech, sig: 'text-to-speech' }),
  new Plugin('Vibration', DynamicPluginPage, { provider: Vibration, sig: 'vibration' }),
  new Plugin('Speech Recognition', DynamicPluginPage, { provider: SpeechRecognition, sig: 'speech-regognition' })
];

export default _.sortBy(plugins, ['name']);

