import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared';
import { AuthRoutingModule } from './auth-routing.module';

import { AccountComponent } from './account/account.component';
import { SignInComponent } from './sign-in/sign-in.component';

// components constant
const components = [
  AccountComponent,
  SignInComponent,
];

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ],
  declarations: components
})
export class AuthModule { }
