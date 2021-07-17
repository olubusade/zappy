import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeaturePage } from './feature/feature.page';

const routes: Routes = [
  {
    path: '',
    component: FeaturePage
  },
  {
    path: 'terms-and-conditions',
    loadChildren: () => import('./terms-and-conditions/terms-and-conditions.module').then( m => m.TermsAndConditionsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturePageRoutingModule {}
