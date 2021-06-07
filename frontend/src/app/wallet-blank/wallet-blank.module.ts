import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletBlankPageRoutingModule } from './wallet-blank-routing.module';

import { WalletBlankPage } from './wallet-blank.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletBlankPageRoutingModule
  ],
  declarations: [WalletBlankPage]
})
export class WalletBlankPageModule {}
