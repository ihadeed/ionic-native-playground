import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AboutAppPage } from './about-app';

@NgModule({
  declarations: [
    AboutAppPage,
  ],
  imports: [
    IonicPageModule.forChild(AboutAppPage),
  ],
  exports: [
    AboutAppPage
  ]
})
export class AboutAppPageModule {}
