import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the StringifyPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'stringify',
})
export class StringifyPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    try {
      return JSON.stringify(value);
    } catch (e) {
      return value;
    }
  }
}
