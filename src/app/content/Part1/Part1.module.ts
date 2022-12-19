import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { P1t1Component } from './p1t1/p1t1.component';
import { P1t2Component } from './p1t2/p1t2.component';
import { P1t3Component } from './p1t3/p1t3.component';
import { P1t4Component } from './p1t4/p1t4.component';
import { P1t5Component } from './p1t5/p1t5.component';
import { P1tempComponent } from './P1temp/P1temp.component';



@NgModule({
  declarations: [
    P1t1Component,
    P1t2Component,
    P1t3Component,
    P1t4Component,
    P1t5Component,
    P1tempComponent
  ],
  imports: [
    CommonModule
  ]
})
export class Part1Module { }
