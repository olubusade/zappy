import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Transfer2PageRoutingModule } from './transfer2-routing.module';

import { Transfer2Page } from './transfer2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Transfer2PageRoutingModule
  ],
  declarations: [Transfer2Page]
})
export class Transfer2PageModule {}
