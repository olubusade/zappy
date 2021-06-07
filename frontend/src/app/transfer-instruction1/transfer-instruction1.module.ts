import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransferInstruction1PageRoutingModule } from './transfer-instruction1-routing.module';

import { TransferInstruction1Page } from './transfer-instruction1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransferInstruction1PageRoutingModule
  ],
  declarations: [TransferInstruction1Page]
})
export class TransferInstruction1PageModule {}
