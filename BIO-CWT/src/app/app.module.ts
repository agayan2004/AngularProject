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
import { PostComponent } from './pages/post/post.component';
import { CategoryComponent } from './pages/category/category.component';
import { SheryModule } from "./components/shery/shery.module";



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
    path: "login",
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
        path: "post",
        component: PostComponent
      }, 
      {
        path: "category",
        component: CategoryComponent
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
        PostComponent,
        CategoryComponent
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
        SheryModule
    ]
})
export class AppModule { }