import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserDashboard2Page } from './user-dashboard2.page';

  import { from } from 'rxjs';

const routes: Routes = [
  {
    path: '',
    component: UserDashboard2Page,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () => import('../dashboard2/dashboard2.module').then(m => m.Dashboard2PageModule)
          }
        ]
      },
      {path: 'home/mobile-airtime', loadChildren: () => import('../mobile-airtime/mobile-airtime.module').then(m => m.MobileAirtimePageModule)},
      {path: 'home/cable-tv', loadChildren: () => import('../cable-tv/cable-tv.module').then(m => m.CableTvPageModule)},
      {path: 'home/beneficiary-group', loadChildren: () => import('../beneficiary-group/beneficiary-group.module').then(m => m.BeneficiaryGroupPageModule)},
      {path: 'home/fund-transfer', loadChildren: () => import('../fund-transfer/fund-transfer.module').then(m => m.FundTransferPageModule)},
      {path: 'home/transfer2', loadChildren: () => import('../fund-transfer/transfer2/transfer2.module').then(m => m.Transfer2PageModule)},
      {path: 'home/electricity', loadChildren: () => import('../electricity/electricity.module').then(m => m.ElectricityPageModule)},
      {path: 'home/add-money', loadChildren: () => import('../add-money/add-money.module').then(m => m.AddMoneyPageModule)},
      {
        path: 'wallet',
        children: [
          {
            path: '',
            loadChildren: () => import('../no-account/no-account.module').then(m => m.NoAccountPageModule),            
          }
        ]
      },
      {path: 'wallet/cards', loadChildren: () => import('../no-account/no-account.module').then(m => m.NoAccountPageModule)},
      {path: 'wallet/card-blank', loadChildren: () => import('../my-cards-blank/my-cards-blank.module').then(m => m.MyCardsBlankPageModule)},
      {path: 'wallet/add-money', loadChildren: () => import('../add-money/add-money.module').then(m => m.AddMoneyPageModule)},
      {path: 'wallet/add-card', loadChildren: () => import('../no-account/no-account.module').then(m => m.NoAccountPageModule)},
      {path: 'wallet/delete-card', loadChildren: () => import('../delete-card/delete-card.module').then(m => m.DeleteCardPageModule)},
      {path: 'wallet/success', loadChildren: () => import('../success/success.module').then(m => m.SuccessPageModule)},
      {path: 'wallet/empty', loadChildren: () => import('../wallet-blank/wallet-blank.module').then(m => m.WalletBlankPageModule)},
      {
        path: 'transactions',
        children: [
          {
            path: '',
            loadChildren: () => import('../empty-transaction/empty-transaction.module').then(m => m.EmptyTransactionPageModule)
          }
        ]
      },
      {path: 'transactions/all',    loadChildren: () => import('../transactions/transactions.module').then(m => m.TransactionsPageModule)},
      {path: 'transactions/credit', loadChildren: () => import('../empty-transaction/empty-transaction.module').then(m => m.EmptyTransactionPageModule)},
      {path: 'transactions/debit', loadChildren: () => import('../empty-transaction/empty-transaction.module').then(m => m.EmptyTransactionPageModule)},
      {path: 'transactions/success', loadChildren: () => import('../transfer-success/transfer-success.module').then(m => m.TransferSuccessPageModule)},
      {path: 'transactions/empty', loadChildren: () => import('../empty-transaction/empty-transaction.module').then(m => m.EmptyTransactionPageModule)},
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: () => import('../no-account/no-account.module').then(m => m.NoAccountPageModule),            
          }
        ]
      },
      {path: 'profile/security',             loadChildren: () => import('../no-account/no-account.module').then(m => m.NoAccountPageModule)},
      {path: 'profile/features', loadChildren: () => import('../feature/feature.module').then(m => m.FeaturePageModule)},
      {path: 'profile/no-account', loadChildren: () => import('../no-account/no-account.module').then(m => m.NoAccountPageModule)},
      {path: 'profile/features/download', loadChildren: () => import('../feature/feature.module').then(m => m.FeaturePageModule)},
      {path: 'profile/features/support', loadChildren: () => import('../feature/feature.module').then(m => m.FeaturePageModule)},
      {path: 'profile/features/payment-methods', loadChildren: () => import('../payment-methods/payment-methods.module').then(m => m.PaymentMethodsPageModule)},
      {path: 'profile/features/terms', loadChildren: () => import('../feature/feature.module').then(m => m.FeaturePageModule)},
      {path: 'profile/features/privacy-policy', loadChildren: () => import('../privacy-policy/privacy-policy.module').then(m => m.PrivacyPolicyPageModule)},
      {path: 'profile/security/change-password', loadChildren: () => import('../confirm-payment/confirm-payment.module').then(m => m.ConfirmPaymentPageModule)},
      {path: 'profile/change-photo', loadChildren: () => import('../confirm-payment/confirm-payment.module').then(m => m.ConfirmPaymentPageModule)},
      {path: 'profile/next-of-kin', loadChildren: () => import('../next-of-kin/next-of-kin.module').then(m => m.NextOfKinPageModule)},
      {
        path: 'menu',
        children: [
          {
            path: '',
            loadChildren: () => import('../menu/menu.module').then(m => m.MenuPageModule)
          }
        ]
      },
      {
        path: 'menu/referral',
        loadChildren: () => import('../referral/referral.module').then(m => m.ReferralPageModule)
      },
      {
        path: 'menu/contact',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: 'menu/about',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: '',
        redirectTo: '/user-dashboard2/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/user-dashboard2/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserDashboard2PageRoutingModule {}

