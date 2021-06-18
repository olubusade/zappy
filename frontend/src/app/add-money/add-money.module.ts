import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { Angular4PaystackModule } from 'angular4-paystack';

import { AddMoneyPageRoutingModule } from './add-money-routing.module';

import { AddMoneyPage } from './add-money/add-money.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddMoneyPageRoutingModule,
    Angular4PaystackModule.forRoot('pk_test_bda795695c65c62c6d922532a66d2c324ab16a3e')
  ],
  declarations: [AddMoneyPage]
})
export class AddMoneyPageModule {}
