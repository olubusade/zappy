import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValidateEmailPageRoutingModule } from './validate-email-routing.module';

import { ValidateEmailPage } from './validate-email.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValidateEmailPageRoutingModule
  ],
  declarations: [ValidateEmailPage]
})
export class ValidateEmailPageModule {}
