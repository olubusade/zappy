import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValidateEmailPage } from './validate-email.page';

const routes: Routes = [
  {
    path: '',
    component: ValidateEmailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValidateEmailPageRoutingModule {}
