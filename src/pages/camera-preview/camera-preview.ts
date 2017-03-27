import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { CameraPreview, CameraPreviewOptions } from '@ionic-native/camera-preview';

@Component({
  selector: 'page-camera-preview',
  templateUrl: 'camera-preview.html',
})
export class CameraPreviewPage implements AfterViewInit {

  @ViewChild('cameraPreviewContainer') container: ElementRef;

  constructor(
    public navCtrl: NavController
    , public navParams: NavParams
    , private platform: Platform
    , private cameraPreview: CameraPreview
  ) {}

  ngAfterViewInit() {
    this.platform.ready()
      .then(() => {
        // not really needed, but just in case

        const el: HTMLElement = this.container.nativeElement;

        const options: CameraPreviewOptions = {
          y: el.getBoundingClientRect().top,
          width: el.offsetWidth,
          height: el.offsetHeight
        };

        this.cameraPreview.startCamera(options)
          .then(() => {
            console.log('Camera preview started!');
          })
          .catch(e => {
            console.log('Error starting camera preview', e);
          });

      });
  }

  ngOnDestroy() {
    this.cameraPreview.stopCamera().catch(() => {});
  }

}
