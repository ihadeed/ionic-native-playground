import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'plugin-config',
  templateUrl: 'plugin-config.html'
})
export class PluginConfigComponent {


  _config: any;

  configItems: Array<{name: string; type: string;}> = [];

  @Input()
  set config(val: any) {
    this._config = val;
    this.processConfig();
  }

  @Input()
  name: string;

  @Output()
  configChange: EventEmitter<any> = new EventEmitter<any>();

  getInputType(type: string) {
    switch (type) {
      case 'boolean':
        return 'checkbox';
      case 'number':
        return 'number';
      default:
        return 'text';
    }
  }

  emitChanges() {
    this.configChange.emit(this._config);
  }

  private processConfig() {

    if (typeof this._config != 'object') {
      // we can only process an object
      return;
    }
    for (let prop in this._config) {
      const type = typeof this._config[prop];

      this.configItems.push({
        name: prop,
        type
      });
    }

  }

}
