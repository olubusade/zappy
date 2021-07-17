import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PinResetOtpPageRoutingModule } from './pin-reset-otp-routing.module';

import { PinResetOtpPage } from './pin-reset-otp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PinResetOtpPageRoutingModule
  ],
  declarations: [PinResetOtpPage]
})
export class PinResetOtpPageModule {}
