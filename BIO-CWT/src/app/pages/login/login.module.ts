import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { LoginRoutingModule } from './login-routing.module';
import { SheryModule } from 'src/app/components/shery/shery.module';
import { LoginComponent } from './login.component';
import { FormGroup, FormGroupName, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SheryModule,
    ReactiveFormsModule,
  ]
})
export class LoginModule { }
