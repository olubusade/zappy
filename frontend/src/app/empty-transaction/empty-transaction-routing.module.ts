import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmptyTransactionPage } from './empty-transaction/empty-transaction.page';

const routes: Routes = [
  {
    path: '',
    component: EmptyTransactionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmptyTransactionPageRoutingModule {}
