import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DebitTransactionPage } from './debit-transaction/debit-transaction.page';

const routes: Routes = [
  {
    path: '',
    component: DebitTransactionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DebitTransactionPageRoutingModule {}
