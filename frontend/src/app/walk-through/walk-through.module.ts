import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalkThroughPageRoutingModule } from './walk-through-routing.module';

import { WalkThroughPage } from './walk-through/walk-through.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalkThroughPageRoutingModule
  ],
  declarations: [WalkThroughPage]
})
export class WalkThroughPageModule {}
