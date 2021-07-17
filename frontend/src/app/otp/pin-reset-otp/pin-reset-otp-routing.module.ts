import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PinResetOtpPage } from './pin-reset-otp.page';

const routes: Routes = [
  {
    path: '',
    component: PinResetOtpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PinResetOtpPageRoutingModule {}
