import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentTempComponent } from './content-temp/content-temp.component';
import { Part1Module } from './Part1/Part1.module';



@NgModule({
  declarations: [
    ContentTempComponent
  ],
  imports: [
    CommonModule,
    Part1Module
  ],
  exports: [
    ContentTempComponent
  ]
})
export class ContentModule { }
