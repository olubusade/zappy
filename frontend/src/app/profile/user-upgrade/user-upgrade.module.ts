import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserUpgradePageRoutingModule } from './user-upgrade-routing.module';

import { UserUpgradePage } from './user-upgrade.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserUpgradePageRoutingModule
  ],
  declarations: [UserUpgradePage]
})
export class UserUpgradePageModule {}
