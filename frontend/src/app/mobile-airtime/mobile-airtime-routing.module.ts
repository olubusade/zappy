import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MobileAirtimePage } from './mobile-airtime/mobile-airtime.page';

const routes: Routes = [
  {
    path: '',
    component: MobileAirtimePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MobileAirtimePageRoutingModule {}
