import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtpPage } from './otp/otp.page';

const routes: Routes = [
  {
    path: '',
    component: OtpPage
  },
  {
    path: 'password-reset-otp',
    loadChildren: () => import('./password-reset-otp/password-reset-otp.module').then( m => m.PasswordResetOtpPageModule)
  },
  {
    path: 'email-otp',
    loadChildren: () => import('./email-otp/email-otp.module').then( m => m.EmailOtpPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtpPageRoutingModule {}
