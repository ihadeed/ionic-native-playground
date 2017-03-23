import { Component } from '@angular/core';
import { Badge } from '@ionic-native/badge';
@Component({
  selector: 'page-badge',
  templateUrl: 'badge.html'
})
export class BadgePage {

  constructor(public plugin: Badge){}

}
