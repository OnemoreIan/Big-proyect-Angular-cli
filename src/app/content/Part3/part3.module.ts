import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { P3t1Component } from './p3t1/p3t1.component';
import { P3tempComponent } from './P3temp/p3temp.component';
import { P3t2Component } from './p3t2/p3t2.component';
import { P3t3Component } from './p3t3/p3t3.component';
import { P3t4Component } from './p3t4/p3t4.component';
import { P3t5Component } from './p3t5/p3t5.component';



@NgModule({
  declarations: [
    P3t1Component,
    P3tempComponent,
    P3t2Component,
    P3t3Component,
    P3t4Component,
    P3t5Component
  ],
  imports: [
    CommonModule
  ]
})
export class Part3Module { }
