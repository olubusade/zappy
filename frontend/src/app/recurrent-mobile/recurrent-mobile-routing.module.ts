import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecurrentMobilePage } from './recurrent-mobile/recurrent-mobile.page';

const routes: Routes = [
  {
    path: '',
    component: RecurrentMobilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecurrentMobilePageRoutingModule {}
