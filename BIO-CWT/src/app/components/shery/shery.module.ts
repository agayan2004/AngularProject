import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { FormComponent } from '../form/form.component';
import { KindsComponent } from '../kinds/kinds.component';
import { KaruselComponent } from '../karusel/karusel.component';
import { AboutBlockComponent } from '../about-block/about-block.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-bootstrap/carousel';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AboutBlockComponent,
    KindsComponent,
    FormComponent,
    KaruselComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    CarouselModule.forRoot(),
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    AboutBlockComponent,
    KaruselComponent,
    KindsComponent,
    FormComponent,
  ]
})
export class SheryModule { }
