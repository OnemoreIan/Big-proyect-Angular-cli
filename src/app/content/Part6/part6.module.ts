import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { P6t1Component } from './p6t1/p6t1.component';
import { P6t2Component } from './p6t2/p6t2.component';
import { P6t3Component } from './p6t3/p6t3.component';
import { P6t4Component } from './p6t4/p6t4.component';
import { P6t5Component } from './p6t5/p6t5.component';



@NgModule({
  declarations: [
    P6t1Component,
    P6t2Component,
    P6t3Component,
    P6t4Component,
    P6t5Component
  ],
  imports: [
    CommonModule
  ]
})
export class Part6Module { }
