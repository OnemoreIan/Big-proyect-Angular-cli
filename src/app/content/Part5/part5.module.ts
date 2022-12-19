import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { P5t1Component } from './p5t1/p5t1.component';
import { P5t2Component } from './p5t2/p5t2.component';
import { P5t4Component } from './p5t4/p5t4.component';
import { P5t3Component } from './p5t3/p5t3.component';
import { P5t5Component } from './p5t5/p5t5.component';
import { P5tempComponent } from './P5temp/p5temp.component';



@NgModule({
  declarations: [
    
    P5t1Component,
    P5t2Component,
    P5t4Component,
    P5t3Component,
    P5t5Component,
    P5tempComponent
  ],
  imports: [
    CommonModule
  ]
})
export class Part5Module { }
