import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentTempComponent } from './content-temp/content-temp.component';



@NgModule({
  declarations: [
    ContentTempComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContentTempComponent
  ]
})
export class ContentModule { }
