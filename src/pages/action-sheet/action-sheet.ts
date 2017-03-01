import { Component } from '@angular/core';
import { ActionSheet } from "@ionic-native/action-sheet";

@Component({
  selector: 'page-action-sheet',
  templateUrl: 'action-sheet.html'
})
export class ActionSheetPage {

  constructor(
    private actionSheet: ActionSheet
  ) {}

  showActionSheet() {
    this.actionSheet.show({
      buttonLabels: ['An option', 'Another option', 'A third option'],
      title: 'A Native Action Sheet'
    })
      .then(res => console.log(res))
      .catch(e => console.error(e));
  }

}
