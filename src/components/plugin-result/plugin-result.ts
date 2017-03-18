import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'plugin-result',
  templateUrl: 'plugin-result.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PluginResultComponent {

  _error;
  _result;

  @Input()
  set result(val: any) {
    this.reset();
    this._result = this.process(val);
  }

  @Input()
  set error(val: any) {
    this.reset();
    this._error = this.process(val);
  }

  private reset() {
    this._error = null;
    this._result = null;
  }

  private process(value: any) {
    try {
      if (typeof value != 'string') {
        value = JSON.stringify(value, undefined, 2);
      }
      value = value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      return value.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'number';
        if (/^"/.test(match)) {
          if (/:$/.test(match)) {
            cls = 'key';
          } else {
            cls = 'string';
          }
        } else if (/true|false/.test(match)) {
          cls = 'boolean';
        } else if (/null/.test(match)) {
          cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
      });
    } catch (e) {
      return value;
    }
  }

}
