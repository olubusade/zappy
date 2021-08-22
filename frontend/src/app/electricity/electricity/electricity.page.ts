import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';
import { NavigationServiceService } from '../../services/navigation-service.service';
import { appConfig } from 'src/app/core/config/config';

@Component({
  selector: 'app-electricity',
  templateUrl: './electricity.page.html',
  styleUrls: ['./electricity.page.scss', '../../../assets/css/main.scss'],
})
export class ElectricityPage implements OnInit {
  //Current position of swipe
  currentPosition;
  //Height of the botom sheet div
  height;
  //Minimum height to dismiss the bottom sheet
  minimumThreshold;
  //Starting position of the swipe
  startPosition;


  billers = [
    {
      id: 1,
      name: 'Ibadan Electricity',
      src: '../../../assets/icon/ibadan_elect_logo.png'
    },
    {
      id: 2,
      name: 'Eko Electricity',
      src: '../../../assets/icon/eko_elect_logo.jpg'
    },
    {
      id: 3,
      name: 'Abuja Electricity',
      src: '../../../assets/icon/abuja_elect_logo.jpg'
    },
    {
      id: 4,
      name: 'Benin Electricity',
      src: '../../../assets/icon/benin_elect_logo.jpg'
    }
  ];

  selectedBiller = null;
  selectedBillerIndex = 0;
  billingData = {
    plan: 'Prepaid',
    meterNumber: null,
    amount: null,
    vendor: null
  };
  userId = null;
  userbalance = null;

  constructor( 
    private router: Router,
    private navService: NavigationServiceService,
    private userService : UserService,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController
    ) { }
  
  ngOnInit() {
    this.closePinPad();
    this.userId = localStorage.getItem(`setting:user_id`);
    this.userbalance = localStorage.getItem(`setting:wallet_amount`);
  }

  chooseBiller(i: number){
    this.selectedBiller = this.billers[i];
    console.log(this.selectedBiller);
    this.selectedBillerIndex = i;
    this.billingData.vendor = this.selectedBiller.name;
    this.openPinPad();
  }

  async proceed(){
    this.billingData['userId'] = this.userId;
    console.log(this.billingData);
    console.log(this.userbalance + ' - ' + this.billingData.amount);
    if(parseInt(this.billingData.amount) >= parseInt(this.userbalance)){
      const alert = await this.alertCtrl.create({
        cssClass: 'my-alert',
        header: 'Zappy',
        subHeader: '',
        mode:'ios',
        message: 'Insufficient fund to perform operation',
        buttons: ['OK']
      });
      await alert.present();
    }else{
      //loader
      const loading = await this.loadingCtrl.create({
        cssClass: 'loading',
        message: 'Please wait...',
        //duration: 300,
        animated: true,
        spinner: 'bubbles'
      });
      await loading.present();
      this.userService.payElectricityBill(this.billingData).subscribe(async resp => {
        console.log(resp);
        await loading.dismiss();
        if(resp.status == appConfig.statusCode.accepted){
          const alert = await this.alertCtrl.create({
            cssClass: 'my-alert',
            header: 'Zappy',
            subHeader: '',
            mode:'ios',
            message: 'Transaction set successfully',
            buttons: [{
              text: 'Ok',
              role: 'yes',
              handler: () => {
                let newWalletBalance = this.userbalance - this.billingData.amount;
                localStorage.setItem(`setting:wallet_amount`, newWalletBalance.toString());
              }
            }]
          });
          await alert.present();
        }else{
          const alert = await this.alertCtrl.create({
            cssClass: 'my-alert',
            header: 'Zappy',
            subHeader: '',
            mode:'ios',
            message: 'Transaction failed',
            buttons: ['Try again']
          });
          await alert.present();
        }
      });
    }
  }

  openPinPad(){
    //this.showFab = false;
    (<HTMLStyleElement>document.querySelector(".bottomSheet")).style.bottom = "0px";
    (<HTMLStyleElement>document.querySelector(".bg")).style.display = "block";
  }

  closePinPad(){
    //this.showFab = true;
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

  goBack() {
    this.navService.navigateToPreviousPage();
  }
   
}
 