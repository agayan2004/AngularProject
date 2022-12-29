import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { SheryModule } from 'src/app/components/shery/shery.module';
import { GalleryComponent } from './gallery.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HomeComponent } from '../home/home.component';


@NgModule({
  declarations: [
    GalleryComponent
  ],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    SheryModule,
    CarouselModule.forRoot(),
  ],
  bootstrap: [GalleryComponent]
})
export class GalleryModule { }
