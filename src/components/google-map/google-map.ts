import {Component, Input, Renderer, OnInit, ElementRef, Output, EventEmitter, AfterViewInit} from '@angular/core';
import {Platform} from "ionic-angular";
import {
  GoogleMap, GoogleMapsEvent, GoogleMaps, LatLng, CameraPosition, GeocoderRequest, GoogleMapOptions, ILatLng
} from "@ionic-native/google-maps";

@Component({
  selector: 'google-map',
  template: '<ng-content></ng-content>'
})
export class GoogleMapComponent implements AfterViewInit {

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

  @Input()
  options: GoogleMapOptions = {
    camera: {
      target: [
        {"lat": 21.306944, "lng": -157.858333},
        {"lat": 47.037874, "lng": -69.779490}
      ]
    }
  };

  @Output()
  mapClick: EventEmitter<LatLng> = new EventEmitter<any>();

  @Output()
  mapReady: EventEmitter<GoogleMap> = new EventEmitter<GoogleMap>();


  constructor(
    private platform: Platform,
    private renderer: Renderer,
    private el: ElementRef,
    private googleMaps: GoogleMaps
  ) {
    this.mapContainer = el.nativeElement;
  }

  ngAfterViewInit() {

    this.setupContainer();

    this.platform.ready()
      .then(() => {
        this.map = this.googleMaps.create(this.mapContainer, this.options);

        this.map.one(GoogleMapsEvent.MAP_READY)
          .then(() => {
            console.log('Map ready fired', this.map);

            this.mapReady.emit(this.map);
            this.isInit = true;
          });

        this.map.on(GoogleMapsEvent.MAP_CLICK)
          .subscribe(data => this.mapClick.emit(data));

      });

  }

  ngOnDestroy() {
    this.map.remove();
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
