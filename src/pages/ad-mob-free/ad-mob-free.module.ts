import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdMobFreePage } from './ad-mob-free';

@NgModule({
  declarations: [
    AdMobFreePage,
  ],
  imports: [
    IonicPageModule.forChild(AdMobFreePage),
  ],
  exports: [
    AdMobFreePage
  ]
})
export class AdMobFreePageModule {}
