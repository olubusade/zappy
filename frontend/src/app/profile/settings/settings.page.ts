import { CommissionRegimeComponent } from './commission-regime/commission-regime.component';
import { AutomatedReportsComponent } from './automated-reports/automated-reports.component';
import { AlertsPreferenceComponent } from './alerts-preference/alerts-preference.component';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, AlertController, PopoverController, ToastController,ModalController } from '@ionic/angular';
import { stringify } from 'querystring';
import { appConfig } from 'src/app/core/config/config';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss', '../../../assets/css/main.scss'],
})
export class SettingsPage implements OnInit {

 // notification:boolean = false;
  userData = {
    security_question:'',
    sq_answer:'',
    low_wallet_amount:'0',
    transaction_pin:'',
    notification_alert:''
  }
  updateData: any = {
    user_id:'',
    notification_alert:''
  };
  constructor(private router: Router,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private popoverCtrl: PopoverController,
    private modalCtrl: ModalController,
    private actionSheetCtrl: ActionSheetController,
    private userservice: UserService) { }

  ngOnInit() {
    this.updateData.user_id = parseInt(localStorage.getItem(`setting:user_id`));
    this.userData.security_question = localStorage.getItem('setting:security_question');
    this.userData.sq_answer = localStorage.getItem('setting:sq_answer');
    this.userData.low_wallet_amount = localStorage.getItem('setting:low_wallet_trigger_amount');
    this.userData.notification_alert = localStorage.getItem('setting:notification_alert');
    
  }

  segmentChanged(ev: any) {
    const page = ev.detail.value;

    if(page === 'personal') {
      this.router.navigate(['/user-dashboard/profile'])
    } 
    else {
      this.router.navigate(['/user-dashboard/profile/'+page])
    }
  }
  
  navigatePage(data) {
    this.router.navigate(['/user-dashboard/profile/'+data])
  }
  doRefresh(event) {/*
    this.userData.user_id = localStorage.getItem(`setting:user_id`);
    this.userData.role_id = localStorage.getItem(`setting:role_id`);
    this.userData.first_name = localStorage.getItem(`setting:first_name`);
    this.userData.last_name = localStorage.getItem(`setting:last_name`);
    this.userData.mobile_no = localStorage.getItem(`setting:mobile_no`);
    this.userData.email = localStorage.getItem(`setting:email`);
    this.userData.points = localStorage.getItem(`setting:points`);
    this.userData.security_question = localStorage.getItem(`setting:security_question`);
    this.userData.sq_answer = localStorage.getItem(`setting:sq_answer`);
    this.userData.nickname = localStorage.getItem(`setting:nickname`);
    this.userData.gender = localStorage.getItem(`setting:gender`);
    this.userData.address = localStorage.getItem(`setting:address`);
    */
    setTimeout(() => {
      event.target.complete();
    }, 1000);
  }
  async getToggle(event:any){
   
    this.updateData.notification_alert = event.detail.checked.toString();   
    this.userservice.updateUserProfile(this.updateData).subscribe(async (resp) => {
      if (resp.status == appConfig.statusCode.ok) {
        this.userData.notification_alert = this.updateData.notification_alert;
        localStorage.setItem(`setting:notification_alert`, this.updateData.notification_alert);
        this.updateToast('Notification Alerts');
      }
    });
    
  }
 
  async updateUserSettings(label:string,ev:any){
    if(label == "notification_preference"){
      if (!this.userData.notification_alert || this.userData.notification_alert === 'false') {
        const alert = await this.alertCtrl.create({
          cssClass: 'alert-zappy',
          mode:'ios',
          animated:true,
          message:`Enable notification alerts`,
          header: 'Zappy',
          buttons: [
            {
              text: 'Okay',
              role: '',
              cssClass: 'primary',
              handler: () => {}
            }
          ]
        });
        await alert.present();
      }else{
          const popover = await this.popoverCtrl.create({
            component: AlertsPreferenceComponent,
            cssClass: 'zappy-popover',
            translucent: true,
            event:ev,
            animated:true
          });
          popover.onDidDismiss().then((data:any)=>{
            console.log((data));
          })
          return await popover.present();         
      }
    }
    if(label == "low_wallet_trigger") {
        await this.alertCtrl.create({
          cssClass: 'alert-zappy',
          animated:true,
          header:"Low Wallet Trigger Amount",
          message:`Please enter your preferred amount.`,
          inputs: [
            { type: 'number', value:this.userData.low_wallet_amount, name: 'low_wallet_trigger_amount', placeholder:'Trigger amount'}
          ],  
          buttons: [
            {
              text: 'Set Amount',
              handler: async (res) => {
                //send to backend
                this.updateData.low_wallet_amount = parseFloat(res.low_wallet_trigger_amount);   
                this.userservice.updateUserProfile(this.updateData).subscribe(async (resp) => {
                //if the update is successful at backend then update the localstorage
               
                  if (resp.status == appConfig.statusCode.ok) {
                    this.userData.low_wallet_amount = this.updateData.low_wallet_amount;
                    localStorage.setItem(`setting:low_wallet_trigger_amount`,this.updateData.low_wallet_amount);
                    this.updateToast('Low wallet trigger');
                  }
                });
                
              }
            },{
              text: "Cancel"
            }
          ]
        }).then(res => res.present())
       
    }
    if(label == "automated_report"){
      const popover = await this.popoverCtrl.create({
        component: AutomatedReportsComponent,
        cssClass: 'zappy-popover',
        translucent: true,
        event:ev,
        animated:true
      });
      popover.onDidDismiss().then((data:any)=>{
        console.log((data));
      })
      return await popover.present();
    }
    if(label == "commission_regime"){
      const popover = await this.popoverCtrl.create({
        component: CommissionRegimeComponent,
        cssClass: 'zappy-popover',
        translucent: true,
        event:ev,
        animated:true
      });
      popover.onDidDismiss().then((data:any)=>{
        console.log((data));
      })
      return await popover.present();
    }
    if(label == "reset_pin"){
      
      if (this.userData.security_question == null || this.userData.security_question == ''){
        const alert = await this.alertCtrl.create({
          cssClass: 'alert-zappy',
          mode:'ios',
          animated:true,
          message:`Kindly set your security question`,
          header: 'Zappy',
          buttons: [
            {
              text: 'Okay',
              role: '',
              cssClass: 'primary',
              handler: () => {}
            }
          ]
        });
        await alert.present();
      }else if (this.userData.security_question && (this.userData.sq_answer == null || this.userData.sq_answer == '')){
        const alert = await this.alertCtrl.create({
          cssClass: 'alert-zappy',
          mode:'ios',
          animated:true,
          message:`Kindly set your security answer!`,
          header: 'Zappy',
          buttons: [
            {
              text: 'Okay',
              role: '',
              cssClass: 'primary',
              handler: () => {}
            }
          ]
        });
        await alert.present();
      }
      else{
        //Request for Security Answer
        await this.alertCtrl.create({
          cssClass: 'alert-zappy',
          animated:true,
          header:this.userData.security_question+'?',
          message:`Kindly provide your security answer`,
          inputs: [
            { type: 'text', name: 'security_answer', placeholder:'Security answer'}
          ],
          buttons: [
            {
              text: 'Submit',
              handler: async (res) => {
                console.log(res.security_answer);
                //check if the security answer entered is correct
                console.log('From user',this.userData.sq_answer);
                console.log('From storage',res.security_answer);
                if(this.userData.sq_answer == res.security_answer){
                    //Display alert for transaction pin entry
                    await this.alertCtrl.create({
                      cssClass: 'alert-zappy',
                      animated:true,
                      header:"Reset Zappy PIN",
                      message:`Please enter your preferred transaction pin.`,
                      inputs: [
                        { type: 'number', name: 'transaction_pin', placeholder:'Transaction pin'}
                      ], 
                      buttons: [
                        {
                          text: 'Reset pin',
                          handler: async (res) => {
                            console.log(res.transaction_pin);
                            this.userData.transaction_pin = res.transaction_pin;
                            if(this.userData.transaction_pin.length > 4){
                              await this.alertCtrl.create({
                                cssClass: 'alert-zappy',
                                mode:'ios',
                                animated:true,
                                message:`Maximum of 4 digits is required`,
                                header: 'Zappy',
                                buttons: [
                                  {
                                    text: 'Okay',
                                    role: '',
                                    cssClass: 'primary',
                                    handler: () => {}
                                  }
                                ]
                              }).then((res) => res.present());
                              

                            }else {
                                //send to backend
                                this.updateData.transaction_pin = res.transaction_pin;   
                                this.userservice.updateUserProfile(this.updateData).subscribe(async (resp) => {
                                //if the update is successful at backend then update the localstorage
                              
                                  if (resp.status == appConfig.statusCode.ok) {
                                    this.userData.transaction_pin = this.updateData.transaction_pin;
                                    localStorage.setItem(`setting:transaction_pin`,this.updateData.transaction_pin);
                                    await this.toastCtrl.create({
                                      message: `Transaction pin reset successfully`,
                                      duration: 1000
                                    }).then(res => res.present());
                                  }
                                });
                            }
                          }
                        },{
                          text: "Cancel"
                        }
                      ]
                    }).then(res => res.present())
                }else {
                  await this.alertCtrl.create({
                    cssClass: 'alert-zappy',
                    mode:'ios',
                    animated:true,
                    message:`Oops! Incorrect security answer!`,
                    header: 'Zappy',
                    buttons: [
                      {
                        text: 'Okay',
                        role: '',
                        cssClass: 'primary',
                        handler: () => {}
                      }
                    ]
                  }).then((res) => res.present());
                }
              }
            },{
              text: "Cancel"
            }
          ]
        }).then(res => res.present())

      }
      
    }
  }
  async updateToast(inputData:any) {
    const toast = await this.toastCtrl.create({
                message: `${inputData} updated successfully.`,
                duration: 1500
    });
    await toast.present();
  }
}


