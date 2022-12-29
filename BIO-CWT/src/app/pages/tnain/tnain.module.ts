import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TnainRoutingModule } from './tnain-routing.module';
import { SheryModule } from 'src/app/components/shery/shery.module';
import { TnainComponent } from './tnain.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TnainComponent
  ],
  imports: [
    CommonModule,
    TnainRoutingModule,
    SheryModule,
    ReactiveFormsModule,
  ]
})
export class TnainModule { }
