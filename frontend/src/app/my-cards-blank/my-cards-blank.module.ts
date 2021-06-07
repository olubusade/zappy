import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyCardsBlankPageRoutingModule } from './my-cards-blank-routing.module';

import { MyCardsBlankPage } from './my-cards-blank.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyCardsBlankPageRoutingModule
  ],
  declarations: [MyCardsBlankPage]
})
export class MyCardsBlankPageModule {}
