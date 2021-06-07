import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoAccountPage } from './no-account.page';

const routes: Routes = [
  {
    path: '',
    component: NoAccountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoAccountPageRoutingModule {}
