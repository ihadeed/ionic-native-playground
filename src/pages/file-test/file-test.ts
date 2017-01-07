import { Component } from '@angular/core';
import {NavController, Platform, ViewController} from 'ionic-angular';
import {Camera, File} from "ionic-native";

/*
  Generated class for the FileTest page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-file-test',
  templateUrl: 'file-test.html'
})
export class FileTestPage {

  constructor(
    private platform: Platform,
    public viewCtrl: ViewController
  ) {}

  test() {

    console.log('Starting test');

    this.platform.ready()
      .then(() => {

        console.log('Platform ready');

        Camera.getPicture()
          .then(imageData => {
            console.log('Image data is', imageData);

            const fileName = imageData.split('/').pop();
            const path = imageData.replace(fileName, '');

            return File.readAsArrayBuffer(path, fileName);
          })
          .then(response => {
            console.log('File response is: ', response);
          })
          .catch(console.error.bind(console));

      });

  }

}
