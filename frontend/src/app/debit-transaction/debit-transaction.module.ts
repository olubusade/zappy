import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DebitTransactionPageRoutingModule } from './debit-transaction-routing.module';

import { DebitTransactionPage } from './debit-transaction/debit-transaction.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DebitTransactionPageRoutingModule
  ],
  declarations: [DebitTransactionPage]
})
export class DebitTransactionPageModule {}
