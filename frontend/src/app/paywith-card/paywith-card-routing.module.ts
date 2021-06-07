import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaywithCardPage } from './paywith-card/paywith-card.page';

const routes: Routes = [
  {
    path: '',
    component: PaywithCardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaywithCardPageRoutingModule {}
