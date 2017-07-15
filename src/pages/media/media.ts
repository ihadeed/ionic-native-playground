import { Component } from '@angular/core';
import {File} from "@ionic-native/file";
import { MediaObject, Media, MEDIA_STATUS, MEDIA_ERROR } from "@ionic-native/media";

@Component({
  selector: 'page-media',
  templateUrl: 'media.html'
})
export class MediaPage {

  result;
  error;
  mediaObject: MediaObject;
  isRecording: boolean;
  isPlaying: boolean;

  constructor(
    private media: Media,
    private file: File
  ) {}

  startRecording() {
    this.mediaObject = this.media.create('file.mp3');

    this.mediaObject.onSuccess.subscribe((status: any) => {
      console.log('Success fired', status);
    });

    this.mediaObject.onError.subscribe((err: MEDIA_ERROR) => {
      console.log('Error fired', err);
    });

    this.mediaObject.onStatusUpdate.subscribe((status: MEDIA_STATUS) => {
      console.log('Status update fired', status);

      if (status == MEDIA_STATUS.STOPPED || status == MEDIA_STATUS.PAUSED) {
        this.isPlaying = false;
        this.isRecording = false;
      }

    });

    this.mediaObject.startRecord();
    this.isRecording = true;
  }

  stopRecording() {
    this.mediaObject.stopRecord();
    this.isRecording = false;
  }

  startPlaying() {
    this.mediaObject.play();
    this.isPlaying = true;
  }

  stopPlaying() {
    this.mediaObject.stop();
    this.isPlaying = false;
  }

}
