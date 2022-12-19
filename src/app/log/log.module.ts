import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LogtempComponent } from './logtemp/logtemp.component';



@NgModule({
  declarations: [
    LoginComponent,
    LogtempComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LogModule { }
