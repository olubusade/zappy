import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyCardsBlankPage } from './my-cards-blank.page';

const routes: Routes = [
  {
    path: '',
    component: MyCardsBlankPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyCardsBlankPageRoutingModule {}
