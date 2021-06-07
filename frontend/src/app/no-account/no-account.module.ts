import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoAccountPageRoutingModule } from './no-account-routing.module';

import { NoAccountPage } from './no-account.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoAccountPageRoutingModule
  ],
  declarations: [NoAccountPage]
})
export class NoAccountPageModule {}
