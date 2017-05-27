import { NgModule } from '@angular/core';
import { StringifyPipe } from "./stringify/stringify";

@NgModule({
  declarations: [
    StringifyPipe
  ],
  exports: [
    StringifyPipe
  ]
})
export class PipesModule {}
