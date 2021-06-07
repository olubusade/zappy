import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Transfer2Page } from './transfer2.page';

const routes: Routes = [
  {
    path: '',
    component: Transfer2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Transfer2PageRoutingModule {}
