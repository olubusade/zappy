import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreditTransactionPageRoutingModule } from './credit-transaction-routing.module';

import { CreditTransactionPage } from './credit-transaction/credit-transaction.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreditTransactionPageRoutingModule
  ],
  declarations: [CreditTransactionPage]
})
export class CreditTransactionPageModule {}
