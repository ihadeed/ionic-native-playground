import { Component } from '@angular/core';
import {File} from "@ionic-native/file";
import {MediaObject, MediaPlugin} from "@ionic-native/media";

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

  onSuccess(r) {
    this.result = r;
  }

  onError(e) {
    this.error = e;
  }

  constructor(
    private media: MediaPlugin,
    private file: File
  ) {}

  startRecording() {
    this.mediaObject = this.media.create('file.mp3');
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
