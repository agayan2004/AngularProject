import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from "ngx-bootstrap/tooltip";



import { AppComponent } from './app.component';
import { Route, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { LevaotComponent } from './pages/levaot/levaot.component';

import { SheryModule } from "./components/shery/shery.module";
import { TrimPipe } from './pipes/trim.pipe';
import { ClickDirective } from './directives/click.directive';
import { WorkWithComponent } from './pages/work-with/work-with.component';
import { CourserComponent } from './pages/courser/courser.component';
import { NavlinksComponent } from './pages/navlinks/navlinks.component';
import { CommonModule } from '@angular/common';
import { QuestionsComponent } from './pages/questions/questions.component';



const router: Route[] = [
  {
    path: "",
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: "home",
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: "about",
    loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule)
  },
  {
    path: "price",
    loadChildren: () => import('./pages/price/price.module').then(m => m.PriceModule)
  },
  {
    path: "contact",
    loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: "gallery",
    loadChildren: () => import('./pages/gallery/gallery.module').then(m => m.GalleryModule)  
  },
  {
    path: "admin_login",
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)    
  },
  {
    path: 'tnain',
    loadChildren: () => import('./pages/tnain/tnain.module').then(m => m.TnainModule)  
  },
  {
    path: 'admin',
    component: LevaotComponent,
    children: [
      {
        path: "work_with",
        component: WorkWithComponent
      }, 
      {
        path: "questions",
        component: QuestionsComponent
      }, 
      {
        path: "nav_links",
        component: NavlinksComponent 
      },
      {
        path: "courser",
        component: CourserComponent
      }
    ]
  },
  {
    path: "**",
    loadChildren: () => import('./pages/page404/page404.module').then(m => m.Page404Module)  
  }
]

@NgModule({
    declarations: [
        AppComponent,
        LevaotComponent,
        TrimPipe,
        ClickDirective,
        WorkWithComponent,
        CourserComponent,
        NavlinksComponent,
        QuestionsComponent
    ],
    exports: [],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        RouterModule.forRoot(router),
        ReactiveFormsModule,
        HttpClientModule,
        CarouselModule.forRoot(),
        ButtonsModule.forRoot(),
        ModalModule.forRoot(),
        TooltipModule.forRoot(),
        SheryModule,
        CommonModule,
    ReactiveFormsModule,
    RouterModule,
    ]
})
export class AppModule { }