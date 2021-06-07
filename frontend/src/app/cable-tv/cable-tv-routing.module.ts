import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CableTvPage } from './cable-tv/cable-tv.page';

const routes: Routes = [
  {
    path: '',
    component: CableTvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CableTvPageRoutingModule {}
