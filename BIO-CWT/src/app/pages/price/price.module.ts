import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PriceRoutingModule } from './price-routing.module';
import { SheryModule } from 'src/app/components/shery/shery.module';
import { PriceComponent } from './price.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';


@NgModule({
  declarations: [
    PriceComponent
  ],
  imports: [
    CommonModule,
    PriceRoutingModule,
    SheryModule,
    CarouselModule.forRoot(),
  ],
  bootstrap: [PriceComponent]
})
export class PriceModule { }
