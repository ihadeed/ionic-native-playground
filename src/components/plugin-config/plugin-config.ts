import { Component } from '@angular/core';

/*
  Generated class for the PluginConfig component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'plugin-config',
  templateUrl: 'plugin-config.html'
})
export class PluginConfigComponent {

  text: string;

  constructor() {
    console.log('Hello PluginConfig Component');
    this.text = 'Hello World';
  }

}
