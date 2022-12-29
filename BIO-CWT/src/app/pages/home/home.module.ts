import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';


import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SheryModule } from 'src/app/components/shery/shery.module';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-bootstrap/carousel';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SheryModule,
    HttpClientModule,
    CarouselModule.forRoot(),
  ],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
