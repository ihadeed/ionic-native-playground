import { Component } from '@angular/core';
import {Camera, CameraOptions} from "@ionic-native/camera";

@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html'
})
export class CameraPage {

  result;
  error;

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

  constructor(
    private camera: Camera
  ) {}

  takePicture() {
    this.camera.getPicture(this.config)
      .then(res => this.result = res)
      .catch(e => this.error = e);
  }

}
