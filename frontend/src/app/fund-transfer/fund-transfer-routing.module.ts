import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FundTransferPage } from './fund-transfer.page';

const routes: Routes = [
  {
    path: '',
    component: FundTransferPage
  },
  {
    path: 'transfer2',
    loadChildren: () => import('./transfer2/transfer2.module').then( m => m.Transfer2PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FundTransferPageRoutingModule {}
