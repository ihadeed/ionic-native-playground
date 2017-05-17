import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {ObjectCreatorPage} from "./object-creator";

@NgModule({
  declarations: [ObjectCreatorPage],
  imports: [
    IonicPageModule.forChild(ObjectCreatorPage)
  ]
})
export class Module {}
