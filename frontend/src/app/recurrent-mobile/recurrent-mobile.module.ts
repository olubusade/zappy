import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecurrentMobilePageRoutingModule } from './recurrent-mobile-routing.module';

import { RecurrentMobilePage } from './recurrent-mobile/recurrent-mobile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecurrentMobilePageRoutingModule
  ],
  declarations: [RecurrentMobilePage]
})
export class RecurrentMobilePageModule {}
