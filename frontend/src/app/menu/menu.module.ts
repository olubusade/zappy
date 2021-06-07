import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuPageRoutingModule } from './menu-routing.module';
import { Routes } from '@angular/router';

import { MenuPage } from './menu/menu.page';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
      {
        path: 'referral',
        loadChildren: () => import('../referral/referral.module').then(m => m.ReferralPageModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: 'about',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: 'logout',
        loadChildren: () => import('../login/login.module').then(m => m.LoginPageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: '/menu/menu'
  }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuPageRoutingModule
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
