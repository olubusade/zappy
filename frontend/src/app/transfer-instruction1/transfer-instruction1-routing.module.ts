import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransferInstruction1Page } from './transfer-instruction1.page';

const routes: Routes = [
  {
    path: '',
    component: TransferInstruction1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransferInstruction1PageRoutingModule {}
