import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { NavigationServiceService } from '../../services/navigation-service.service';
import { AlertController, NavController, LoadingController } from '@ionic/angular';
import { appConfig } from 'src/app/core/config/config';

@Component({
  selector: 'app-recurrent-mobile',
  templateUrl: './recurrent-mobile.page.html',
 styleUrls: ['./recurrent-mobile.page.scss']
})
export class RecurrentMobilePage implements OnInit {
  typeParams: any = {};

  expanded = false;
  userId = null;
  beneficiaryGroups = [];
  showFab = true;

  //Current position of swipe
  currentPosition;
  //Height of the botom sheet div
  height;
  //Minimum height to dismiss the bottom sheet
  minimumThreshold;
  //Starting position of the swipe
  startPosition;

  addContactData =  {
    phone: null,
    amount: null,
    duration: null,
    chosenNetwork: 'Airtel'
  }

  networks: any = [
    {
      name: 'airtel', 
      picked: true, 
      divClass:"iconContainer airtelUrl", 
      imgClass: 'networkCheck', 
      availableAmounts: [
        {price: 50, reward: 1}, 
        {price: 100, reward: 2}, 
        {price: 200, reward: 2},
        {price: 500, reward: 3},
        {price: 1000, reward: 4},
        {price: 10000, reward: 5}
      ]
    },
    {
      name: 'mtn', 
      picked: false, 
      divClass:"iconContainer mtnUrl", 
      imgClass: null,
      availableAmounts: [
        {price: 50, reward: 1}, 
        {price: 100, reward: 2}, 
        {price: 200, reward: 2},
        {price: 500, reward: 3},
        {price: 1000, reward: 4},
        {price: 10000, reward: 5}
      ]
    },
    {
      name: 'glo', 
      picked: false, 
      divClass:"iconContainer gloUrl", 
      imgClass: null,
      availableAmounts: [
        {price: 50, reward: 1}, 
        {price: 100, reward: 2}, 
        {price: 200, reward: 2},
        {price: 500, reward: 3},
        {price: 1000, reward: 4},
        {price: 10000, reward: 5}
      ]
    },
    {
      name: '9mobile', 
      picked: false, 
      divClass:"iconContainer nineMobileUrl", 
      imgClass: null,
      availableAmounts: [
        {price: 50, reward: 1}, 
        {price: 100, reward: 2}, 
        {price: 200, reward: 2},
        {price: 500, reward: 3},
        {price: 1000, reward: 4},
        {price: 10000, reward: 5}
      ]
    }
  ]

  selectedNetworkIndex: number = 0;
  recurrentData = [];
  
  constructor( private router: Router,
    private route: ActivatedRoute, 
    private navService: NavigationServiceService, 
    private userService : UserService,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,) { }
  
  ngOnInit() {
    this.route.queryParams.subscribe(param => {
      console.log(param);
      this.typeParams = param;
      this.closePinPad();
      this.userId = localStorage.getItem(`setting:user_id`);
      this.fetchRecurrentMobile();
    });
  }

  pickNetwork(index: number){
    this.selectedNetworkIndex = 0;
    this.networks.map((network, arrayIndex) => {
      network.picked = index == arrayIndex ? true : false;
      network.imgClass = index == arrayIndex ? 'networkCheck' : null;
    });
    this.addContactData.chosenNetwork = this.networks[index].name;
  }

  async addContact(){
    this.addContactData['userId'] = this.userId;
    this.addContactData['type'] = this.typeParams.type;
    console.log(this.addContactData);
    //loader
    const loading = await this.loadingCtrl.create({
      cssClass: 'loading',
      message: 'Please wait...',
      //duration: 300,
      animated: true,
      spinner: 'bubbles'
    });
    await loading.present();

    this.userService.addMobileRecurrent(this.addContactData).subscribe(async resp => {
      console.log(resp);
      await loading.dismiss();

      if(resp.message =='success'){
        const alert = await this.alertCtrl.create({
          cssClass: 'my-alert',
          header: 'Zappy',
          subHeader: '',
          mode:'ios',
          message: 'Transaction set successfully?',
          buttons: [{
            text: 'Ok',
            role: 'yes',
            handler: () => {
              this.fetchRecurrentMobile();
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
          message: 'Operation failed!',
          buttons: ['OK']
        });
        await alert.present();
      }
    });
  }

  async fetchRecurrentMobile(){
    console.log("Fetching recurrent mobile");
    //loader
    const loading = await this.loadingCtrl.create({
      cssClass: 'loading',
      message: 'Please wait...',
      duration: 300,
      animated: true,
      spinner: 'bubbles'
    });
    await loading.present();

    this.userService.fetchRecurrentMobile({type: this.typeParams.type, userId: parseInt(this.userId)}).subscribe(async resp => {
      await loading.dismiss();
      console.log(resp);
      this.recurrentData = resp.data;
    });
  }

  openPinPad(){
    this.showFab = false;
    (<HTMLStyleElement>document.querySelector(".bottomSheet")).style.bottom = "0px";
    (<HTMLStyleElement>document.querySelector(".bg")).style.display = "block";
  }

  closePinPad(){
    this.showFab = true;
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
  // console.log(data)
  this.router.navigate(['/user-dashboard/home/recurrent-services'])
  }
  
}
