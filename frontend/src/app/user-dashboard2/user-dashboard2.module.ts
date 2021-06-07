import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserDashboard2PageRoutingModule } from './user-dashboard2-routing.module';

import { UserDashboard2Page } from './user-dashboard2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserDashboard2PageRoutingModule
  ],
  declarations: [UserDashboard2Page]
})
export class UserDashboard2PageModule {}
