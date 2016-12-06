import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import {Camera, CameraOptions} from "ionic-native";

@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html'
})
export class CameraPage {

  config: CameraOptions = {
    quality: 100,
    destinationType: 1,
    sourceType: 1,
    allowEdit: false,
    encodingType: 0,
    targetWidth: 500,
    targetHeight: 500,
    mediaType: 1,
    correctOrientation: false,
    saveToPhotoAlbum: false,
    cameraDirection: 0
  };

  configItems = [];

  constructor(public viewCtrl: ViewController) {
    for(let prop in this.config) {
      this.configItems.push(prop);
    }
  }


  takePicture() {
    Camera.getPicture(this.config)
      .then(res => console.log(res))
      .catch(e => console.error(e));
  }

}
