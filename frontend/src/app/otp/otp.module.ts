import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtpPageRoutingModule } from './otp-routing.module';

import { OtpPage } from './otp/otp.page';

import { PinResetOtpPageModule } from './pin-reset-otp/pin-reset-otp.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtpPageRoutingModule,
    PinResetOtpPageModule
  ],
  declarations: [OtpPage]
})
export class OtpPageModule {}
