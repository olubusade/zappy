import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationServiceService } from '../../services/navigation-service.service';
import { AlertController, NavController, LoadingController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-beneficiary-group',
  templateUrl: './beneficiary-group.page.html',
  styleUrls: ['./beneficiary-group.page.scss'],
})
export class BeneficiaryGroupPage implements OnInit {
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
    name: null,
    groupId: null
  }
  
  constructor( private router: Router,
    private navService: NavigationServiceService,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private userService : UserService,
    ) {}
  ngOnInit() {
    this.closePinPad();

    this.userId = localStorage.getItem(`setting:user_id`);

    this.fetchGroups(this.userId);
  }

  expandItem(index): void {
    this.expanded = !this.expanded;
    this.beneficiaryGroups[index].expanded = this.expanded;
    console.log(this.beneficiaryGroups[index]);
  }

  async openAddBeneficiary(){
    await this.alertCtrl.create({
      cssClass: 'alert-zappy',
      animated:true,
      header:'Add Beneficiary Group',
      message:``,
      inputs: [
        { type: 'text', name: 'groupName', placeholder:'Group name'}
      ],
      buttons: [
        {
          text: 'Add',
          handler: async (res) => {
            console.log(res.groupName);
            this.createNewGroup(res.groupName);
          }
        },
        {
          text: "Cancel"
        }
      ]
    }).then(res => res.present())
  }

  async fetchGroups(userId){
    const loading = await this.loadingCtrl.create({
      cssClass: 'loading',
      message: 'Please wait...',
      //duration: 300,
      animated: true,
      spinner: 'bubbles'
    });
    await loading.present();

    this.userService.fetchGroups({userId}).subscribe(async resp => {
      console.log(resp);
      this.beneficiaryGroups = resp.data;
      this.beneficiaryGroups.map(group => {
        group["expanded"] = false;
        group["height"] = !group.group ? '100px' : group.group.length * 30+'px';
      });

      console.log(this.beneficiaryGroups);

      await loading.dismiss();
    });
  }

  async openAddContact(groupId){
    console.log(groupId);
    this.openPinPad();
    this.addContactData.groupId = groupId;
  }

  async addContact(){
    console.log(this.addContactData);

    const {phone, name} = this.addContactData;
    if(!phone || phone.length != 13){
      const alert = await this.alertCtrl.create({
        cssClass: 'my-alert',
        header: 'Zappy',
        subHeader: '',
        mode:'ios',
        message: 'Enter phone number in the right format for contact',
        buttons: ['OK']
      });
      await alert.present();
    }else{
      if(!name){
        const alert = await this.alertCtrl.create({
          cssClass: 'my-alert',
          header: 'Zappy',
          subHeader: '',
          mode:'ios',
          message: 'Enter the fullname of contact',
          buttons: ['OK']
        });
        await alert.present();
      }else{
        const loading = await this.loadingCtrl.create({
          cssClass: 'loading',
          message: 'Adding to group...',
          //duration: 300,
          animated: true,
          spinner: 'bubbles'
        });
        await loading.present();

        this.userService.addContact(this.addContactData).subscribe(async (resp) => {
          console.log(resp);
          await loading.dismiss();
          const alert = await this.alertCtrl.create({
            cssClass: 'my-alert',
            header: 'Zappy',
            subHeader: '',
            mode:'ios',
            message: resp.message,
            buttons: [{
              text: 'OK',
              role: 'yes',
              handler: () => {
                this.closePinPad();
                this.fetchGroups(this.userId);
              }
            }]
          });
          await alert.present();
          
        });
      }
    }
  }

  async createNewGroup(groupName: string){
    const loading = await this.loadingCtrl.create({
      cssClass: 'loading',
      message: 'Creating group...',
      //duration: 300,
      animated: true,
      spinner: 'bubbles'
    });
    await loading.present();
    this.userService.createBeneficiaryGroup({groupName, userId: this.userId}).subscribe(async resp => {
      console.log(resp);
      await loading.dismiss();
      if(resp.message == 'successful'){
        const alert = await this.alertCtrl.create({
          cssClass: 'my-alert',
          header: 'Zappy',
          subHeader: '',
          mode:'ios',
          message: 'Beneficiary group created successfully.',
          buttons: [{
            text: 'OK',
            role: 'yes',
            handler: () => {
              this.fetchGroups(this.userId);
            }
          }]
        });
        await alert.present();
      }else if(resp.message == 'existing'){
        const alert = await this.alertCtrl.create({
          cssClass: 'my-alert',
          header: 'Zappy',
          subHeader: '',
          mode:'ios',
          message: 'Beneficiary group already existing.',
          buttons: ['OK']
        });
        await alert.present();
      }else{
        const alert = await this.alertCtrl.create({
          cssClass: 'my-alert',
          header: 'Zappy',
          subHeader: '',
          mode:'ios',
          message: 'Beneficiary group failed.',
          buttons: ['OK']
        });
        await alert.present();
      }
    });
  }

  goBack() {
    this.navService.navigateToPreviousPage();
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

}