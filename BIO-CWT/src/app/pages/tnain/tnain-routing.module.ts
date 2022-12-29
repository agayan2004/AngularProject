import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TnainComponent } from './tnain.component';

const routes: Routes = [
  {
    path: "",
    component: TnainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TnainRoutingModule { }
