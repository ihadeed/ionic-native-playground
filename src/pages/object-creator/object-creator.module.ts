import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {ObjectCreatorPage} from "./object-creator";
import {StringifyPipe} from "../../pipes/stringify/stringify";
import {PipesModule} from "../../pipes/pipes.modules";

@NgModule({
  declarations: [
    ObjectCreatorPage
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(ObjectCreatorPage)
  ]
})
export class Module {}
