import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import {GoogleMapComponent} from "../components/google-map/google-map";

import {ActionSheetPage} from "../pages/action-sheet/action-sheet";
import {BrightnessPage} from "../pages/brightness/brightness";
import {CameraPage} from "../pages/camera/camera";
import {ContactsPage} from "../pages/contacts/contacts";
import {GoogleMapsPage} from "../pages/google-maps/google-maps";
import {ActionSheet} from "@ionic-native/action-sheet";
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

import {IonicStorageModule} from "@ionic/storage";
import {DynamicPluginPage} from "../pages/dynamic-plugin/dyanmic-plugin";
import {SignatureService} from "../providers/signature";
import {HttpModule} from "@angular/http";
import { HelpPage } from '../pages/help/help';
import { CameraPreviewPage } from '../pages/camera-preview/camera-preview';
import { CameraPreview } from '@ionic-native/camera-preview'
import {MediaPage} from "../pages/media/media";
import { Media } from '@ionic-native/media';
import { File } from '@ionic-native/file';
import {Base64ToGallery} from "@ionic-native/base64-to-gallery";
import {Toast} from "@ionic-native/toast";
import { BrowserTab } from '@ionic-native/browser-tab';
import { AdMobFree } from '@ionic-native/admob-free';
import {AppConfigProvider} from "../providers/app-config/app-config";
import {StringifyPipe} from "../pipes/stringify/stringify";
import {PipesModule} from "../pipes/pipes.modules";

const components = [
  GoogleMapComponent,
  PluginResultComponent,
  PluginConfigComponent,
  PluginMethodsComponent
];

const pages = [
  MyApp,
  PluginParamsPage,
  DynamicPluginPage,
  HelpPage,

  ActionSheetPage,
  BrightnessPage,
  CameraPage,
  ContactsPage,
  GoogleMapsPage,
  CameraPreviewPage,
  MediaPage
];

const providers = [
  {
    provide: ErrorHandler,
    useClass: IonicErrorHandler
  },
  SignatureService,

  ActionSheet,
  Brightness,
  Camera,
  Contacts,
  GoogleMaps,
  CameraPreview,
  Media,
  File,
  Base64ToGallery,
  Toast,
  BrowserTab,

  SplashScreen,
  StatusBar,
  AdMobFree,
  AppConfigProvider
];

export function getDeclarations() {
  return [...components, ...pages];
}

export function getEntryComponents() {
  return pages;
}

export function getProviders() {
  return providers;
}

@NgModule({
  declarations: getDeclarations(),
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    PipesModule
  ],
  bootstrap: [IonicApp],
  entryComponents: getEntryComponents(),
  providers: getProviders()
})
export class AppModule {}
