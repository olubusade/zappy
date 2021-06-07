import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
//import {RegisterPageModule} from './register/register.module'
const routes: Routes = [
  {
    path: '',
    redirectTo: 'walk-through',
    pathMatch: 'full' 
  },
  {
    path: 'forgotpassword',
    loadChildren: () => import('./login/forgotpassword/forgotpassword.module').then( m => m.ForgotpasswordPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./login/logout/logout.module').then( m => m.LogoutPageModule)
  },
  {
    path: 'newlogin',
    loadChildren: () => import('./newlogin/newlogin.module').then( m => m.NewloginPageModule)
  },
  {
    path: 'user-dashboard',
    loadChildren: () => import('./user-dashboard/user-dashboard.module').then( m => m.UserDashboardPageModule)
  },
  {
    path: 'landing-page',
    loadChildren: () => import('./landing-page/landing-page.module').then( m => m.LandingPagePageModule)
  },
  {
    path: 'walk-through',
    loadChildren: () => import('./walk-through/walk-through.module').then( m => m.WalkThroughPageModule)
  },
  {
    path: 'user-dashboard2',
    loadChildren: () => import('./user-dashboard2/user-dashboard2.module').then( m => m.UserDashboard2PageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'dashboard2',
    loadChildren: () => import('./dashboard2/dashboard2.module').then( m => m.Dashboard2PageModule)
  },
  {
    path: 'otp/:m',
    loadChildren: () => import('./otp/otp.module').then( m => m.OtpPageModule)
  },
  {
    path: 'signup/:m',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'transaction-pin',
    loadChildren: () => import('./signup/transaction-pin/transaction-pin.module').then( m => m.TransactionPinPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
