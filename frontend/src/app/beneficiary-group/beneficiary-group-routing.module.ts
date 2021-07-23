import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeneficiaryGroupPage } from './beneficiary-group/beneficiary-group.page';

const routes: Routes = [
  {
    path: '',
    component: BeneficiaryGroupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeneficiaryGroupPageRoutingModule {}
