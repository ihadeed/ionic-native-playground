import { Component } from '@angular/core';
import {ViewController} from 'ionic-angular';
import {ActionSheet} from "ionic-native";


@Component({
  selector: 'page-action-sheet',
  templateUrl: 'action-sheet.html'
})
export class ActionSheetPage {

  constructor(public viewCtrl: ViewController) {}

  showActionSheet() {
    ActionSheet.show({
      buttonLabels: ['An option', 'Another option', 'A third option'],
      title: 'A Native Action Sheet'
    })
      .then(res => console.log(res))
      .catch(e => console.error(e));
  }

}
