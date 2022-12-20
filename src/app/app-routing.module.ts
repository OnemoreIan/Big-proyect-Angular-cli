import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentTempComponent } from './content/content-temp/content-temp.component';
import { P1tempComponent } from './content/Part1/P1temp/P1temp.component';
import { LogtempComponent } from './log/logtemp/logtemp.component';

const routes: Routes = [
  {path:'',component:LogtempComponent},
  {path:'main',component:ContentTempComponent},
  {path:'part1',component:P1tempComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
