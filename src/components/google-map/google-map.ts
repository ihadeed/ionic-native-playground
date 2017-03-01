import {Component, ViewChild, Input, Renderer, OnInit, ElementRef} from '@angular/core';
import {Platform} from "ionic-angular";
import {
  GoogleMap, GoogleMapsEvent, GoogleMapsLatLng, CameraPosition, GoogleMapsMarkerOptions,
  GoogleMapsMarker
} from "ionic-native";

@Component({
  selector: 'google-map',
  templateUrl: 'google-map.html'
})
export class GoogleMapComponent implements OnInit {

  private mapContainer: HTMLElement;

  map: GoogleMap;

  private isInit: boolean = false;

  _height: string = '100%';
  @Input()
  set height(val: string) {
    this._height = val;
    this.isInit && this.setHeight();
  }

  get height(): string {
    return this._height;
  }

  _width: string = '100%';
  @Input()
  set width(val: string) {
    this._width = val;
    this.isInit && this.setWidth();
  }

  get width() {
    return this._width;
  }

  constructor(
    private platform: Platform,
    private renderer: Renderer,
    private el: ElementRef
  ) {
    this.mapContainer = el.nativeElement;
  }

  ngOnInit() {

    this.setupContainer();

    this.platform.ready()
      .then(() => {
        this.map = new GoogleMap(this.mapContainer, {

        });
        this.map.one(GoogleMapsEvent.MAP_READY)
          .then(() => {
            this.isInit = true;
          });
      });

  }

  private setupContainer() {
    this.setWidth();
    this.setHeight();

    // set display block
    this.renderer.setElementStyle(this.mapContainer, 'z-index', '1000');
    this.renderer.setElementStyle(this.mapContainer, 'display', 'block');
  }

  private setWidth() {
    this.renderer.setElementStyle(this.mapContainer, 'width', this._width);
  }

  private setHeight() {
    this.renderer.setElementStyle(this.mapContainer, 'height', this._height);
  }

}
