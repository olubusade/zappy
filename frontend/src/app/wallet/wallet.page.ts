import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { AlertController, NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit {

  balanceVisible: boolean = true;

  option = {
    slidesPerView: 2.5,
    centeredSlides: true,
    loop: true,
    spaceBetween: 1
  }

  userData = {
    first_name:null,
    last_name:null,
    wallet_amount:null,
    points: null,
    userId: null,
    cashback: null,
    smsUnit: null,
    voiceSmsUnit: null,
    referralBonus: null,
  }

  loading: boolean = false;


  //Current position of swipe
  currentPosition;
  //Height of the botom sheet div
  height;
  //Minimum height to dismiss the bottom sheet
  minimumThreshold;
  //Starting position of the swipe
  startPosition;

  shareFundData =  {
    phone: null,
    amount: null
  }

  constructor(
    private router: Router, 
    private userService : UserService,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController
    ) { }

  ngOnInit() {
    this.closePinPad();

    this.userData.first_name = localStorage.getItem(`setting:first_name`);
    this.userData.wallet_amount = localStorage.getItem(`setting:wallet_amount`);
    this.userData.points = localStorage.getItem(`setting:points`);
    this.userData.userId = localStorage.getItem(`setting:user_id`);
    this.userData.cashback = localStorage.getItem(`setting:cashback`);
    this.userData.smsUnit = localStorage.getItem(`setting:sms_unit`);
    this.userData.voiceSmsUnit = localStorage.getItem(`setting:voice_sms_unit`);
    this.userData.referralBonus = localStorage.getItem(`setting:referral_bonus`);

    if (!this.userData.first_name || !localStorage.getItem(`setting:user_id`)) {
        this.router.navigate(['/logout'])
    }
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

  navigatePage(data) {
    this.router.navigate([data])
  }
  
  toggleBalance(){
    this.balanceVisible = !this.balanceVisible;
  }

  refreshBalance(){
    this.loading = true;
    this.userService.refreshWallet({userId: parseInt(this.userData.userId)}).subscribe(resp => {
      console.log(resp);
      localStorage.setItem(`setting:wallet_amount`,resp.data.wallet_amount);
      localStorage.setItem(`setting:points`,resp.data.points);
      localStorage.setItem(`setting:cashback`,resp.data.cashback==null ? '0' : resp.data.cashback);
      localStorage.setItem(`setting:sms_unit`,resp.data.sms_unit==null ? '0' : resp.data.sms_unit);
      localStorage.setItem(`setting:voice_sms_unit`,resp.data.voice_sms_unit==null ? '0' : resp.data.voice_sms_unit);
      localStorage.setItem(`setting:referral_bonus`,resp.data.referral_bonus==null ? '0' : resp.data.referral_bonus);

      this.userData.wallet_amount = resp.data.wallet_amount;
      this.userData.points = resp.data.points;
      this.userData.cashback = resp.data.cashback;
      this.userData.smsUnit = resp.data.sms_unit;
      this.userData.voiceSmsUnit = resp.data.voice_sms_unit;
      this.userData.referralBonus = resp.data.referral_bonus;

      this.loading = false;
    });
  }

  openPinPad(){
    
    (<HTMLStyleElement>document.querySelector(".bottomSheet")).style.bottom = "0px";
    (<HTMLStyleElement>document.querySelector(".bg")).style.display = "block";
  }

  closePinPad(){
    //reset values
    this.currentPosition = 0;
    this.startPosition = 0;

    //Hide bottom sheet
    (<HTMLStyleElement>document.querySelector(".bottomSheet")).style.bottom = "-1000px";
    
    //Reset bottomsheet translate value
    (<HTMLStyleElement>document.querySelector(".bottomSheet")).style.transform = "translate3d(0px 0px 0px)";

    //Hide background overlay
    (<HTMLStyleElement>document.querySelector(".bg")).style.display = "none";
  }

  //On swiping the bottom sheet
  touchMove(evt: TouchEvent){
    // if(this.startPosition == 0){
    //   this.startPosition = evt.touches[0].clientY;  
    // }

    // //Get bottom sheet height
    // this.height = document.querySelector(".bottomSheet").clientHeight;

    // //Top position in every touch move
    // var y = evt.touches[0].clientY;

    // //Calculate current position value for swiping the bottom sheet
    // this.currentPosition = y - this.startPosition;

    // //Do swiping if current position and start position are greater that 0
    // if(this.currentPosition > 0 && this.startPosition > 0){
    //   (<HTMLStyleElement>document.querySelector(".bottomSheet")).style.transform = "translate3d(0px, " + this.currentPosition + "px, 0px)";
    // }
  }

  //On stop touching
  touchEnd(){
    //Calculate minimum height to close Bottom Sheet
    //this.minimumThreshold = this.height - 130;

    //If current position is less than minimum height, then fully open bottom sheet
    // if(this.currentPosition < this.minimumThreshold){
    //   (<HTMLStyleElement>document.querySelector(".bottomSheet")).style.transform = "translate3d(0px, 0px, 0px)";
    // }else{
    //   this.closePinPad();
    // }
  }

  async shareFund() {
    console.log(this.shareFundData);
    const {phone, amount} = this.shareFundData;
    if(!phone || phone.length != 13){
      const alert = await this.alertCtrl.create({
        cssClass: 'my-alert',
        header: 'Zappy',
        subHeader: '',
        mode:'ios',
        message: 'Enter phone number in the right format for recipient',
        buttons: ['OK']
      });
      await alert.present();
    }else{
      if(!amount || amount <= 0){
        const alert = await this.alertCtrl.create({
          cssClass: 'my-alert',
          header: 'Zappy',
          subHeader: '',
          mode:'ios',
          message: 'Enter the amount to share',
          buttons: ['OK']
        });
        await alert.present();
      }else{
        if(parseFloat(this.userData.wallet_amount) < parseFloat(amount)){
          const alert = await this.alertCtrl.create({
            cssClass: 'my-alert',
            header: 'Zappy',
            subHeader: '',
            mode:'ios',
            message: 'Insufficient balance to perform transaction',
            buttons: ['OK']
          });
          await alert.present();
        }else{
          const loading = await this.loadingCtrl.create({
            cssClass: 'loading',
            message: 'Sharing fund...',
            //duration: 300,
            animated: true,
            spinner: 'bubbles'
          });
          await loading.present();
  
          this.shareFundData["userId"] = this.userData.userId;
          this.userService.shareFund(this.shareFundData).subscribe(async (resp) => {
            console.log(resp);
            await loading.dismiss();
            const alert = await this.alertCtrl.create({
              cssClass: 'my-alert',
              header: 'Zappy',
              subHeader: '',
              mode:'ios',
              message: resp.data.message,
              buttons: [{
                text: 'OK',
                role: 'yes',
                handler: () => {
                  this.closePinPad();
                }
              }]
            });
            await alert.present();

            if(resp.data.message == 'Fund sharing successfull'){
              this.refreshBalance();
            }
          });
        }
      }
    }
  }

}
