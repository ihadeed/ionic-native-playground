import {CameraPage} from "./pages/camera/camera";
import {ActionSheetPage} from "./pages/action-sheet/action-sheet";
import {BarcodeScannerPage} from "./pages/barcode-scanner/barcode-scanner";
import {BatteryStatusPage} from "./pages/battery-status/battery-status";
import {BrightnessPage} from "./pages/brightness/brightness";
import {CameraPreviewPage} from "./pages/camera-preview/camera-preview";
import {CardIO} from "ionic-native";
import {CardIOPage} from "./pages/card-io/card-io";
import {ClipboardPage} from "./pages/clipboard/clipboard";
import {ContactsPage} from "./pages/contacts/contacts";
import {DevicePage} from "./pages/device/device";
import {DeviceAccountsPage} from "./pages/device-accounts/device-accounts";
import {MarketPage} from "./pages/market/market";

class Plugin {
  constructor(
    public name: string,
    public component: any
  ){}
}


export default [
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
];

