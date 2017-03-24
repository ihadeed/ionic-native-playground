import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import {GoogleMapComponent} from "../components/google-map/google-map";

import {ActionSheetPage} from "../pages/action-sheet/action-sheet";
import {BarcodeScannerPage} from "../pages/barcode-scanner/barcode-scanner";
import {BrightnessPage} from "../pages/brightness/brightness";
import {CameraPage} from "../pages/camera/camera";
import {ContactsPage} from "../pages/contacts/contacts";
import {GoogleMapsPage} from "../pages/google-maps/google-maps";
import {ActionSheet} from "@ionic-native/action-sheet";
import {BarcodeScanner} from "@ionic-native/barcode-scanner";
import {Brightness} from "@ionic-native/brightness";
import {Camera} from "@ionic-native/camera";
import {Contacts} from "@ionic-native/contacts";
import {GoogleMaps} from "@ionic-native/google-maps";
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {PluginResultComponent} from "../components/plugin-result/plugin-result";
import { PluginConfigComponent } from '../components/plugin-config/plugin-config';
import {PluginMethodsComponent} from "../components/plugin-methods/plugin-methods";
import {PluginParamsPage} from "../pages/plugin-params/plugin-params";
import { ObjectCreatorPage } from '../pages/object-creator/object-creator';

import {IonicStorageModule} from "@ionic/storage";
import {DynamicPluginPage} from "../pages/dynamic-plugin/dyanmic-plugin";
import {SignatureService} from "../providers/signature";
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GoogleMapComponent,
    PluginResultComponent,
    PluginConfigComponent,
    PluginMethodsComponent,
    PluginParamsPage,
    DynamicPluginPage,
    ObjectCreatorPage,

    ActionSheetPage,
    BarcodeScannerPage,
    BrightnessPage,
    CameraPage,
    ContactsPage,
    GoogleMapsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PluginParamsPage,
    DynamicPluginPage,
    ObjectCreatorPage,

    ActionSheetPage,
    BarcodeScannerPage,
    BrightnessPage,
    CameraPage,
    ContactsPage,
    GoogleMapsPage
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: IonicErrorHandler
    },
    SignatureService,

    ActionSheet,
    BarcodeScanner,
    Brightness,
    Camera,
    Contacts,
    GoogleMaps,

    SplashScreen,
    StatusBar
  ]
})
export class AppModule {}
