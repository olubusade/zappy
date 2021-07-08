import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserUpgradePage } from './user-upgrade.page';

const routes: Routes = [
  {
    path: '',
    component: UserUpgradePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserUpgradePageRoutingModule {}
