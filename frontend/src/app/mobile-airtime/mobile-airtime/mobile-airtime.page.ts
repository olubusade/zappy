import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import { NavigationServiceService } from '../../services/navigation-service.service';
import { AlertController, NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-mobile-airtime',
  templateUrl: './mobile-airtime.page.html',
 styleUrls: ['./mobile-airtime.page.scss']
})
export class MobileAirtimePage implements OnInit {
  @ViewChild('slide') slide: IonSlides;
  tabs: string[] = ['airtime', 'data'];
  selectedSegment: string = this.tabs[0];
  phoneNumber: string = null;
  selectedNetworkIndex: number = 0;
  purchaseParams: any = {type: null, mobile: null, network: null, amount: null, reward: null};
  networks: any = [
    {
      name: 'airtel', 
      picked: true, 
      divClass:"iconContainer airtelUrl", 
      imgClass: 'networkCheck', 
      availableAmounts: [
        {price: 0, reward: 0}, 
        {price: 0, reward: 0}, 
        {price: 0, reward: 0},
        {price: 0, reward: 0},
        {price: 0, reward: 0},
        {price: 0, reward: 0}
      ]
    },
    {
      name: 'mtn', 
      picked: false, 
      divClass:"iconContainer mtnUrl", 
      imgClass: null,
      availableAmounts: [
        {price: 0, reward: 0}, 
        {price: 0, reward: 0}, 
        {price: 0, reward: 0},
        {price: 0, reward: 0},
        {price: 0, reward: 0},
        {price: 0, reward: 0}
      ]
    },
    {
      name: 'glo', 
      picked: false, 
      divClass:"iconContainer gloUrl", 
      imgClass: null,
      availableAmounts: [
        {price: 0, reward: 0}, 
        {price: 0, reward: 0}, 
        {price: 0, reward: 0},
        {price: 0, reward: 0},
        {price: 0, reward: 0},
        {price: 0, reward: 0}
      ]
    },
    {
      name: '9mobile', 
      picked: false, 
      divClass:"iconContainer nineMobileUrl", 
      imgClass: null,
      availableAmounts: [
        {price: 0, reward: 0}, 
        {price: 0, reward: 0}, 
        {price: 0, reward: 0},
        {price: 0, reward: 0},
        {price: 0, reward: 0},
        {price: 0, reward: 0}
      ]
    }
  ]

  constructor( private router: Router, 
    private navService: NavigationServiceService, 
    private alertCtrl: AlertController) {
  }
  
  ngOnInit() {
    this.phoneNumber = localStorage.getItem(`setting:mobile_no`).slice(3);
    this.purchaseParams.mobile = '0'+this.phoneNumber;
    this.purchaseParams.network = this.networks[0].name;
    this.purchaseParams.reward = 0;
    

    let auxData = JSON.parse(localStorage.getItem(`setting:auxData`));
    let auxValue = auxData.aux_value;
    console.log(auxValue);
    auxValue.map(async (value) => {
      let indexOfNetwork = await this.networks.findIndex(network => network.name === value.name);
      console.log(indexOfNetwork);
      this.networks[indexOfNetwork].availableAmounts = value.availableAmounts;
      
      await this.networks[indexOfNetwork].availableAmounts.map((avAmount) => {
        if(avAmount.price !== -1){
          avAmount.reward = (avAmount.reward/100) * avAmount.price;
          console.log(avAmount.reward+ ' '+avAmount.price);
        }else{
          let lastIndex = this.networks[indexOfNetwork].availableAmounts.length - 1;
          this.networks[indexOfNetwork]['anyAmount'] = this.networks[indexOfNetwork].availableAmounts[lastIndex];
          this.networks[indexOfNetwork].availableAmounts.pop();
        }
      });

      this.pickNetwork(0);
    });

    console.log(this.networks);
  }

  pickNetwork(index: number){
    this.selectedNetworkIndex = 0;
    this.purchaseParams.network = this.networks[index].name;
    this.purchaseParams.reward = this.networks[index].anyAmount.reward;
    this.networks.map((network, arrayIndex) => {
      network.picked = index == arrayIndex ? true : false;
      network.imgClass = index == arrayIndex ? 'networkCheck' : null;
    });

    console.log(this.purchaseParams);
  }

  buyAirtime(amt: any){
    this.purchaseParams.amount = amt.price;
    this.purchaseParams.reward = amt.reward;
    this.purchaseParams.type = 'AIRTIME';

    console.log(this.purchaseParams);
    this.router.navigate(['user-dashboard/home/mobile-airtime/payment-details'], {queryParams: this.purchaseParams});
  }

  async buyAirtimeEnterAmount(){
    if(this.purchaseParams.amount == null || this.purchaseParams.amount == 0){
      const alert = await this.alertCtrl.create({
        cssClass: 'my-alert',
        header: 'Zappy',
        subHeader: '',
        mode:'ios',
        message: 'Please, pick a valid airtime amount',
        buttons: ['Ok']
      });
      await alert.present();
    }else{
      this.purchaseParams.type = 'AIRTIME';
      let indexOfNetwork = this.networks.findIndex(network => network.name === this.purchaseParams.network);
      this.purchaseParams.reward = this.networks[indexOfNetwork].anyAmount.reward;
      this.purchaseParams.reward = (this.purchaseParams.reward/100) * parseInt(this.purchaseParams.amount);
      console.log(this.purchaseParams.reward);
      this.router.navigate(['user-dashboard/home/mobile-airtime/payment-details'], {queryParams: this.purchaseParams});
    }
  }

  buyData(amt: any){
    this.purchaseParams.amount = amt.price;
    this.purchaseParams.reward = amt.reward;
    this.purchaseParams.type = 'DATA';

    console.log(this.purchaseParams);
    this.router.navigate(['user-dashboard/home/mobile-airtime/payment-details'], {queryParams: this.purchaseParams});
  }

  buyDataEnterAmount(){
    this.purchaseParams.reward = null;
    this.purchaseParams.type = 'DATA';

    console.log(this.purchaseParams);
    this.router.navigate(['user-dashboard/home/mobile-airtime/payment-details'], {queryParams: this.purchaseParams});
  }

  goBack() {
    this.navService.navigateToPreviousPage();
  }

  segmentChanged({detail}) {
    console.log('Segment changed', detail.value);
    this.slide.slideTo(this.tabs.indexOf(detail.value));
  }

  changeSlide(event: any){
    this.slide.getActiveIndex().then(index => {
      console.log(index);
      this.selectedSegment = this.tabs[index];
    });
  }

  // gotoService(data:string) {
  // // console.log(data)
  //   this.router.navigate(['user-dashboard/home/mobile-airtime/'+data])
  // }
  
}
