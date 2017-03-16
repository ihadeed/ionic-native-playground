import {Component, Input} from '@angular/core';

@Component({
  selector: 'plugin-result',
  templateUrl: 'plugin-result.html'
})
export class PluginResultComponent {

  _error;
  _result;

  @Input()
  set result(val: any) {
    this.reset();
    this._result = val;
  }

  @Input()
  set error(val: any) {
    this.reset();
    this._error = val;
  }

  reset() {
    this._error = null;
    this._result = null;
  }

}
