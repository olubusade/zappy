import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MobileAirtimePageRoutingModule } from './mobile-airtime-routing.module';

import { MobileAirtimePage } from './mobile-airtime/mobile-airtime.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MobileAirtimePageRoutingModule
  ],
  declarations: [MobileAirtimePage]
})
export class MobileAirtimePageModule {}
