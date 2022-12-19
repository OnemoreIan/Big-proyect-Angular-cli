import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentTempComponent } from './content/content-temp/content-temp.component';
import { LogtempComponent } from './log/logtemp/logtemp.component';

const routes: Routes = [
  {path:'',component:LogtempComponent},
  {path:'main',component:ContentTempComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
