import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { P2t2Component } from './p2t2/p2t2.component';
import { P2t1Component } from './p2t1/p2t1.component';
import { P2t3Component } from './p2t3/p2t3.component';
import { P2t4Component } from './p2t4/p2t4.component';
import { P2t5Component } from './p2t5/p2t5.component';



@NgModule({
  declarations: [
    P2t2Component,
    P2t1Component,
    P2t3Component,
    P2t4Component,
    P2t5Component
  ],
  imports: [
    CommonModule
  ]
})
export class Part2Module { }
