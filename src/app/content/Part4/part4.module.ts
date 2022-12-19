import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { P4tempComponent } from './P4temp/p4temp.component';
import { P4t1Component } from './p4t1/p4t1.component';
import { P4t2Component } from './p4t2/p4t2.component';
import { P4t3Component } from './p4t3/p4t3.component';
import { P4t4Component } from './p4t4/p4t4.component';
import { P4t5Component } from './p4t5/p4t5.component';



@NgModule({
  declarations: [
    P4tempComponent,
    P4t1Component,
    P4t2Component,
    P4t3Component,
    P4t4Component,
    P4t5Component
  ],
  imports: [
    CommonModule
  ]
})
export class Part4Module { }
