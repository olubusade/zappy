import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmptyTransactionPageRoutingModule } from './empty-transaction-routing.module';

import { EmptyTransactionPage } from './empty-transaction/empty-transaction.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmptyTransactionPageRoutingModule
  ],
  declarations: [EmptyTransactionPage]
})
export class EmptyTransactionPageModule {}
