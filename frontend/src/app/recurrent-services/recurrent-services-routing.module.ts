import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecurrentServicesPage } from './recurrent-services/recurrent-services.page';

const routes: Routes = [
  {
    path: '',
    component: RecurrentServicesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecurrentServicesPageRoutingModule {}
