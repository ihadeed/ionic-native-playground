import {Component} from '@angular/core';
import {ActionSheet, ActionSheetOptions} from "@ionic-native/action-sheet";

@Component({
  selector: 'page-action-sheet',
  templateUrl: 'action-sheet.html'
})
export class ActionSheetPage {

  result;
  error;

  constructor(
    private actionSheet: ActionSheet
  ) {}

  showActionSheet() {
    const options: ActionSheetOptions = {
      buttonLabels: ['An option', 'Another option', 'A third option'],
      title: 'A Native Action Sheet',
      androidTheme: 4 // TODO replace with this.actionSheet.ANDROID_THEMES.THEME_DEVICE_DEFAULT_DARK
    };

    this.actionSheet.show(options)
      .then(res => {
        this.result = res;
      })
      .catch(e => this.error = e);
  }

}
