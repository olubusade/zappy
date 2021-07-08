import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { NavigationServiceService } from '../../services/navigation-service.service';
import { AlertController, NavController, LoadingController } from '@ionic/angular';
import { appConfig } from 'src/app/core/config/config';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.page.html',
 styleUrls: ['./payment-details.page.scss', '../../../assets/css/action.scss']
})
export class PaymentDetailsPage implements OnInit {
  //Current position of swipe
  currentPosition;
  //Height of the botom sheet div
  height;
  //Minimum height to dismiss the bottom sheet
  minimumThreshold;
  //Starting position of the swipe
  startPosition;

  enteredPin: number[] = [];
  enteredPinHolder: string = '';

  userId: string = null;

  purchaseParams: any = {};
  walletAmount: string = null;
  cashback: string = null;
  
  constructor( private router: Router,
    private route: ActivatedRoute, 
    private navService: NavigationServiceService, 
    private userService : UserService,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,) { }
  
  ngOnInit() {
    this.userId = localStorage.getItem(`setting:user_id`);
    this.closePinPad();

    this.route.queryParams.subscribe(param => {
      console.log(param);
      this.purchaseParams = param;
      this.purchaseParams = {...this.purchaseParams, userId: localStorage.getItem(`setting:user_id`)};
    });

    this.walletAmount = localStorage.getItem(`setting:wallet_amount`);
    this.cashback = localStorage.getItem(`setting:cashback`);
  }

  goBack() {
    this.router.navigate(['user-dashboard/home/mobile-airtime']);
  }

  async enterPin(pin: number){
    console.log(pin);
    if (pin == -1){
      this.enteredPin.pop();
      this.enteredPinHolder = this.enteredPinHolder.slice(0, -1);
      console.log('EnteredPin', this.enteredPin);
      console.log('EnteredPinHolder', this.enteredPinHolder);
    }else{
      this.enteredPin.push(pin);
      this.enteredPinHolder += pin;
      console.log('EnteredPin', this.enteredPin);
      console.log('EnteredPinHolder', this.enteredPinHolder);

      if(this.enteredPin.length == 4){
        console.log('Compare transaction pin');

        //loader
        const loading = await this.loadingCtrl.create({
          cssClass: 'loading',
          message: 'Verifying pin',
          duration: 300,
          animated: true,
          spinner: 'bubbles'
        });
        await loading.present();

        this.userService.verifyTnxPin({userId: this.userId, enteredPin: this.enteredPinHolder}).subscribe(async(resp)=>{
          console.log(resp);
          if(resp.status == appConfig.statusCode.found){
            console.log("Pin Verified");
            const alert = await this.alertCtrl.create({
              cssClass: 'my-alert',
              header: 'Zappy',
              subHeader: '',
              mode:'ios',
              message: 'Are you sure you want to proceed with this transaction?',
              buttons: ['Cancel ', {
                text: 'Proceed',
                role: 'yes',
                handler: () => {
                  this.handleTransaction();
                }
              }]
            });
            await alert.present();
          }else{
            console.log("Wrong pin");
            const alert = await this.alertCtrl.create({
              cssClass: 'my-alert',
              header: 'Zappy',
              subHeader: '',
              mode:'ios',
              message: 'Wrong transaction pin, Try again!',
              buttons: ['OK']
            });
            await alert.present(); 
          }
        });
      }
    }
  }

  async handleTransaction(){
    //loader
    const loading = await this.loadingCtrl.create({
      cssClass: 'loading',
      message: 'Processing recharge',
      //duration: 300,
      animated: true,
      spinner: 'bubbles'
    });
    await loading.present();

    if(this.purchaseParams.amount > this.walletAmount){
      await loading.dismiss();
      const alert = await this.alertCtrl.create({
        cssClass: 'my-alert',
        header: 'Zappy',
        subHeader: '',
        mode:'ios',
        message: 'Insufficient balance in wallet!',
        buttons: ['OK']
      });
      await alert.present();
    }else{
      this.userService.recharge(this.purchaseParams).subscribe(async(resp)=>{
        console.log(resp);
        await loading.dismiss();
        if(resp.status == 201){
          if(resp.response.message == 'Success'){
            this.walletAmount = (parseFloat(this.walletAmount) - parseFloat(this.purchaseParams.amount)).toString();
            this.cashback = this.purchaseParams.reward ? (parseFloat(this.cashback) + parseFloat(this.purchaseParams.reward)).toString() : this.cashback;
            localStorage.setItem(`setting:wallet_amount`, this.walletAmount);
            localStorage.setItem(`setting:cashback`, this.cashback);
            
            this.router.navigate(['/user-dashboard/home/mobile-airtime/payment-successful'], {queryParams: this.purchaseParams});
          }else{
            const alert = await this.alertCtrl.create({
              cssClass: 'my-alert',
              header: 'Zappy',
              subHeader: '',
              mode:'ios',
              message: 'Recharge transaction failed, Make sure all inputs are set properly and try again!',
              buttons: ['OK']
            });
            await alert.present();
          }
        }else{
          const alert = await this.alertCtrl.create({
            cssClass: 'my-alert',
            header: 'Zappy',
            subHeader: '',
            mode:'ios',
            message: 'Recharge transaction failed, Make sure all inputs are set properly and try again!',
            buttons: ['OK']
          });
          await alert.present();
        }
      });
    }
  }

  openPinPad(){
    this.enteredPin = [];
    this.enteredPinHolder = '';

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

  gotoService(data:string) {
  // console.log(data)
    this.router.navigate(['user-dashboard/home/'+data])
  }
  
}
