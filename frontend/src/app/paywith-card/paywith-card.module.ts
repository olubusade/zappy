import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaywithCardPageRoutingModule } from './paywith-card-routing.module';

import { PaywithCardPage } from './paywith-card/paywith-card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaywithCardPageRoutingModule
  ],
  declarations: [PaywithCardPage]
})
export class PaywithCardPageModule {}
