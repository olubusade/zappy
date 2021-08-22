import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserDashboardPage } from './user-dashboard/user-dashboard.page';

  import { from } from 'rxjs';

const routes: Routes = [
  {
    path: '',
    component: UserDashboardPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardPageModule)
          }
        ]
      },
      {path: 'home/mobile-airtime', loadChildren: () => import('../mobile-airtime/mobile-airtime.module').then(m => m.MobileAirtimePageModule)},
      {path: 'home/mobile-airtime/payment-details', loadChildren: () => import('../payment-details/payment-details.module').then(m => m.PaymentDetailsPageModule)},
      {path: 'home/mobile-airtime/payment-successful', loadChildren: () => import('../payment-successful/payment-successful.module').then(m => m.PaymentSuccessfulPageModule)},
      {path: 'home/recurrent-services', loadChildren: () => import('../recurrent-services/recurrent-services.module').then(m => m.RecurrentServicesPageModule)},
      {path: 'home/recurrent-mobile', loadChildren: () => import('../recurrent-mobile/recurrent-mobile.module').then(m => m.RecurrentMobilePageModule)},
      {path: 'home/cable-tv', loadChildren: () => import('../cable-tv/cable-tv.module').then(m => m.CableTvPageModule)},
      {path: 'home/beneficiary-group', loadChildren: () => import('../beneficiary-group/beneficiary-group.module').then(m => m.BeneficiaryGroupPageModule)},
      {path: 'home/fund-transfer', loadChildren: () => import('../fund-transfer/fund-transfer.module').then(m => m.FundTransferPageModule)},
      {path: 'home/transfer2', loadChildren: () => import('../fund-transfer/transfer2/transfer2.module').then(m => m.Transfer2PageModule)},
      {path: 'home/electricity', loadChildren: () => import('../electricity/electricity.module').then(m => m.ElectricityPageModule)},
      {path: 'home/share-data', loadChildren: () => import('../share-data/share-data.module').then(m => m.ShareDataPageModule)},
      {path: 'home/add-money', loadChildren: () => import('../add-money/add-money.module').then(m => m.AddMoneyPageModule)},
      {path: 'home/coming-soon', loadChildren: () => import('../coming-soon/coming-soon.module').then(m => m.ComingSoonPageModule)},
      {
        path: 'wallet',
        children: [
          {
            path: '',
            loadChildren: () => import('../wallet/wallet.module').then(m => m.WalletPageModule)
          }
        ]
      }, 
      {path: 'wallet/cards', loadChildren: () => import('../my-cards/my-cards.module').then(m => m.MyCardsPageModule)},
      {path: 'wallet/card-blank', loadChildren: () => import('../my-cards-blank/my-cards-blank.module').then(m => m.MyCardsBlankPageModule)},
      {path: 'wallet/add-money', loadChildren: () => import('../add-money/add-money.module').then(m => m.AddMoneyPageModule)},
      {path: 'wallet/add-card', loadChildren: () => import('../add-card/add-card.module').then(m => m.AddCardPageModule)},
      {path: 'wallet/delete-card', loadChildren: () => import('../delete-card/delete-card.module').then(m => m.DeleteCardPageModule)},
      {path: 'wallet/success', loadChildren: () => import('../success/success.module').then(m => m.SuccessPageModule)},
      {path: 'wallet/empty', loadChildren: () => import('../wallet-blank/wallet-blank.module').then(m => m.WalletBlankPageModule)},
      {path: 'wallet/fund-transfer', loadChildren: () => import('../fund-transfer/fund-transfer.module').then(m => m.FundTransferPageModule)},
      {path: 'wallet/transfer-instruction', loadChildren: () => import('../transfer-instruction1/transfer-instruction1.module').then(m => m.TransferInstruction1PageModule)},
      {path: 'wallet/confirm-payment', loadChildren: () => import('../confirm-payment/confirm-payment.module').then(m => m.ConfirmPaymentPageModule)},
      {path: 'wallet/otp', loadChildren: () => import('../otp/otp.module').then(m => m.OtpPageModule)},
      {path: 'wallet/paywith-card', loadChildren: () => import('../paywith-card/paywith-card.module').then(m => m.PaywithCardPageModule)},
      {
        path: 'transactions',
        children: [
          {
            path: '',
            loadChildren: () => import('../transactions/transactions.module').then(m => m.TransactionsPageModule),
          }
        ]
      },
      // {path: 'transactions/all',    loadChildren: () => import('../transactions/transactions.module').then(m => m.TransactionsPageModule)},
      {path: 'transactions/credit', loadChildren: () => import('../credit-transaction/credit-transaction.module').then(m => m.CreditTransactionPageModule)},
      {path: 'transactions/debit', loadChildren: () => import('../debit-transaction/debit-transaction.module').then(m => m.DebitTransactionPageModule)},
      {path: 'transactions/success', loadChildren: () => import('../transfer-success/transfer-success.module').then(m => m.TransferSuccessPageModule)},
      {path: 'transactions/empty', loadChildren: () => import('../empty-transaction/empty-transaction.module').then(m => m.EmptyTransactionPageModule)},
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
          }
        ]
      },
      {path: 'profile/security', loadChildren: () => import('../security/security.module').then(m => m.SecurityPageModule)},
      {path: 'profile/features', loadChildren: () => import('../feature/feature.module').then(m => m.FeaturePageModule)},
      {path: 'profile/security/bvn', loadChildren: () => import('../bvn/bvn.module').then(m => m.BvnPageModule)},
      {path: 'profile/no-account', loadChildren: () => import('../no-account/no-account.module').then(m => m.NoAccountPageModule)},
      {path: 'profile/features/download', loadChildren: () => import('../feature/feature.module').then(m => m.FeaturePageModule)},
      {path: 'profile/features/support', loadChildren: () => import('../feature/feature.module').then(m => m.FeaturePageModule)},
      {path: 'profile/features/payment-methods', loadChildren: () => import('../payment-methods/payment-methods.module').then(m => m.PaymentMethodsPageModule)},
      {path: 'profile/features/terms', loadChildren: () => import('../feature/feature.module').then(m => m.FeaturePageModule)},
      {path: 'profile/features/privacy-policy', loadChildren: () => import('../privacy-policy/privacy-policy.module').then(m => m.PrivacyPolicyPageModule)},
      {path: 'profile/security/change-password', loadChildren: () => import('../confirm-payment/confirm-payment.module').then(m => m.ConfirmPaymentPageModule)},
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
        redirectTo: '/user-dashboard/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/user-dashboard/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserDashboardPageRoutingModule {}

