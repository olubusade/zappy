import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { appConfig } from 'src/app/core/config/config';
import { NavigationServiceService } from '../../services/navigation-service.service';
import {AlertController, LoadingController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-add-money',
  templateUrl: './add-money.page.html',
  styleUrls: ['./add-money.page.scss', '../../../assets/css/main.scss'],
})
export class AddMoneyPage implements OnInit {
  userData = {
    first_name: '',
    last_name: '',
    points: '',
    id: ''
  }

  wallet_amount: number =  0;
  fund_amount: number = 0;
  reference = '';
  title = '';
  pKey: string = appConfig.paystackPublicKey;

  constructor( private router: Router, 
    private navService: NavigationServiceService, 
    private alertCtrl : AlertController,
    private loadingCtrl: LoadingController,
    private userService : UserService) { }
  
  goBack() {
    this.navService.navigateToPreviousPage();
  }
  
  ngOnInit() {
    this.userData.first_name = localStorage.getItem(`setting:first_name`);
    this.wallet_amount = +localStorage.getItem(`setting:wallet_amount`);
    this.userData.points = localStorage.getItem(`setting:points`);
    this.userData.id = localStorage.getItem(`setting:user_id`);
    if (!this.userData.first_name || !localStorage.getItem(`setting:user_id`)) {
        this.router.navigate(['/logout'])
    }

    this.reference = `ref-${Math.ceil(Math.random() * 10e13)}`;
    console.log('Wallet amount here '+this.wallet_amount);
  }

  paymentInit() {
    console.log('Payment initialized');
    // const loading = await this.loadingCtrl.create({
    //   cssClass: 'loading',
    //   message: '',
    //   duration: 300,
    //   animated: true,
    //   spinner: 'bubbles'
    // });
    // await loading.present();
  }

  paymentDone(ref: any) {
    //this.title = 'Payment successfull';
    //console.log(this.title, ref);
    const newWalletAmount = +this.wallet_amount + +this.fund_amount;
    console.log(newWalletAmount);
    this.storeReferenceAndWalletAmount(newWalletAmount, ref);
  }

  async storeReferenceAndWalletAmount(wallet_amount: number, paymentRef: any){
    //loader
    const loading = await this.loadingCtrl.create({
      cssClass: 'Finishing up',
      message: '',
      duration: 300,
      animated: true,
      spinner: 'bubbles'
    });
    await loading.present();

    this.userService.storePaymentDetails({paymentRef: paymentRef.reference, walletAmount: wallet_amount, userId: this.userData.id, paymentAmount: this.fund_amount}).subscribe(async(resp)=>{
      if(!resp){
        const alert = await this.alertCtrl.create({
          cssClass: 'my-alert',
          header: 'Zappy',
          subHeader: '',
          mode:'ios',
          message: 'Oops! Something is wrong',
          buttons: ['OK']
        });
        await alert.present(); 
      }
      else if (resp.status == appConfig.statusCode.created) {
        console.log(resp);
        localStorage.setItem(`setting:wallet_amount`, wallet_amount.toString());
        this.wallet_amount = wallet_amount;
      }else {
        const alert = await this.alertCtrl.create({
          cssClass: 'my-alert',
          header: 'Zappy',
          subHeader: '',
          mode:'ios',
          message: resp.message,
          buttons: ['OK']
        });
        await alert.present(); 
      }
    });
  }

  paymentCancel() {
    console.log('payment failed');
  }

  segmentChanged(ev: any) {
    const page = ev.detail.value
    if(page === 'wallet') {
      this.router.navigate(['/user-dashboard/wallet'])
    } 
    else {
      this.router.navigate(['/user-dashboard/wallet/'+page])
    }
  }

  addMoney() {
    alert(this.fund_amount);
    //this.router.navigate(['/user-dashboard/wallet/success'])
  }

  doRefresh(event) {
    this.wallet_amount = parseInt(localStorage.getItem(`setting:wallet_amount`));
    setTimeout(() => {
      event.target.complete();
    }, 1000);
  }
}
