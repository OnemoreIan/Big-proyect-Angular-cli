import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogtempComponent } from './logtemp/logtemp.component';
import { MaterialModule } from '../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LogtempComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LogModule { }
