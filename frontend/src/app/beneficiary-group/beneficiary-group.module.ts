import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BeneficiaryGroupPageRoutingModule } from './beneficiary-group-routing.module';

import { BeneficiaryGroupPage } from './beneficiary-group/beneficiary-group.page';
import { ExpandableComponent } from '../../components/expandable/expandable.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BeneficiaryGroupPageRoutingModule
  ],
  declarations: [BeneficiaryGroupPage, ExpandableComponent]
})
export class BeneficiaryGroupPageModule {}
