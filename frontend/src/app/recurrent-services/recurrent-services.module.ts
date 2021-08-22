import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecurrentServicesPageRoutingModule } from './recurrent-services-routing.module';

import { RecurrentServicesPage } from './recurrent-services/recurrent-services.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecurrentServicesPageRoutingModule
  ],
  declarations: [RecurrentServicesPage]
})
export class RecurrentServicesPageModule {}
