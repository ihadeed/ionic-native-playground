import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import {GoogleMapComponent} from "../components/google-map/google-map";

import {ActionSheetPage} from "../pages/action-sheet/action-sheet";
import {BarcodeScannerPage} from "../pages/barcode-scanner/barcode-scanner";
import {BatteryStatusPage} from "../pages/battery-status/battery-status";
import {BrightnessPage} from "../pages/brightness/brightness";
import {CameraPage} from "../pages/camera/camera";
import {CardIOPage} from "../pages/card-io/card-io";
import {ClipboardPage} from "../pages/clipboard/clipboard";
import {ContactsPage} from "../pages/contacts/contacts";
import {DevicePage} from "../pages/device/device";
import {DeviceAccountsPage} from "../pages/device-accounts/device-accounts";
import {GoogleMapsPage} from "../pages/google-maps/google-maps";
import {GooglePlusPage} from "../pages/google-plus/google-plus";
import {KeyboardPage} from "../pages/keyboard/keyboard";
import {MarketPage} from "../pages/market/market";

import {ActionSheet} from "@ionic-native/action-sheet";
import {BarcodeScanner} from "@ionic-native/barcode-scanner";
import {Brightness} from "@ionic-native/brightness";
import {Camera} from "@ionic-native/camera";
import {CardIO} from "@ionic-native/card-io";
import {Clipboard} from "@ionic-native/clipboard";
import {Contacts} from "@ionic-native/contacts";
import {Device} from "@ionic-native/device";
import {DeviceAccounts} from "@ionic-native/device-accounts";
import {GoogleMaps} from "@ionic-native/google-maps";
import {GooglePlus} from "@ionic-native/google-plus";
import {Keyboard} from "@ionic-native/keyboard";
import {Market} from "@ionic-native/market";

import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {PluginResultComponent} from "../components/plugin-result/plugin-result";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GoogleMapComponent,
    PluginResultComponent,

    ActionSheetPage,
    BarcodeScannerPage,
    BatteryStatusPage,
    BrightnessPage,
    CameraPage,
    CardIOPage,
    ClipboardPage,
    ContactsPage,
    DevicePage,
    DeviceAccountsPage,
    GoogleMapsPage,
    GooglePlusPage,
    KeyboardPage,
    MarketPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,

    ActionSheetPage,
    BarcodeScannerPage,
    BatteryStatusPage,
    BrightnessPage,
    CameraPage,
    CardIOPage,
    ClipboardPage,
    ContactsPage,
    DevicePage,
    DeviceAccountsPage,
    GoogleMapsPage,
    GooglePlusPage,
    KeyboardPage,
    MarketPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},

    ActionSheet,
    BarcodeScanner,
    Brightness,
    Camera,
    CardIO,
    Clipboard,
    Contacts,
    Device,
    DeviceAccounts,
    GoogleMaps,
    GooglePlus,
    Keyboard,
    Market,

    SplashScreen,
    StatusBar
  ]
})
export class AppModule {}
