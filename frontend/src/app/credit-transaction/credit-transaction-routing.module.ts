import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreditTransactionPage } from './credit-transaction/credit-transaction.page';

const routes: Routes = [
  {
    path: '',
    component: CreditTransactionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreditTransactionPageRoutingModule {}
