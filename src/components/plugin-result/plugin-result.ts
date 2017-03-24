import { Component, Input } from '@angular/core';

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
    if (typeof val !== 'undefined') {
      this._result = this.process(val);
    }
  }

  @Input()
  set error(val: any) {
    this.reset();
    if (typeof val !== 'undefined') {
      this._error = this.process(val);
    }
  }

  private reset() {
    this._error = null;
    this._result = null;
  }

  private stringify(value: any, indentMultiplier: number = 1) {
    let valAsString: string = '';
    const indentChar: string = '  ';
    let indentation: string = indentChar.repeat(indentMultiplier);
    let size: number = this.getObjectSize(value);
    let index: number = 0;

    valAsString += this.getPrefix(value) + '\n';

    for (let prop in value) {
      index++;
      valAsString += indentation;

      if (this.isArray(value)) {
        switch (typeof value[prop]) {
          case 'object':
            if (value[prop] == null) valAsString += 'null';
            else valAsString += this.stringify(value[prop], indentMultiplier + 1);
            break;

          case 'boolean':
          case 'number':
            valAsString += value[prop];
            break;

          default:
            valAsString += `"${value[prop]}"`;
        }
      } else {
        valAsString += `"${prop}": `;

        switch (typeof value[prop]) {
          case 'object':
            if (value[prop] == null) valAsString += 'null';
            else valAsString += this.stringify(value[prop], indentMultiplier + 1);
            break;

          case 'boolean':
          case 'number':
            valAsString += value[prop];
            break;

          default:
            valAsString += `"${value[prop]}"`;
        }

      }

      if (index < size) valAsString += ',';
      valAsString += '\n';

    }

    if (indentMultiplier > 1) valAsString += indentChar.repeat(indentMultiplier - 1);
    valAsString += this.getSuffix(value);
    if (indentMultiplier == 1) valAsString += '\n';

    return valAsString;
  }

  private getObjectSize(obj: any): number {
    if (this.isArray(obj)) return obj.length;

    let size: number = 0, key;
    for (key in obj) {
      size++;
    }
    return size;
  }

  private getSuffix(obj: any): string {
    return this.isArray(obj) ? ']' : '}';
  }

  private getPrefix(obj: any): string {
    return this.isArray(obj) ? '[' : '{';
  }

  private isArray(obj: any) {
    return Object.prototype.toString.call(obj) === '[object Array]';
  }

  private colorify(value: string) {
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
  }

  private process(value: any) {
    try {
      if (typeof value == 'object') {
        return this.colorify(this.stringify(value));
      } else if(typeof value == 'number') {
        return value;
      } else return String(value);
    } catch (e) {
      console.log(e);
      return value;
    }
  }

}
