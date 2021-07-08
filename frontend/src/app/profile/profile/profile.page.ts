import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { appConfig } from "./../../core/config/config";
import { AlertController, ToastController, ActionSheetController } from '@ionic/angular';
import { UserService } from './../../services/user.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss', '../../../assets/css/main.scss'],
})
export class ProfilePage implements OnInit {
  userData = {
    user_id:'',
    role_id:'',
    first_name:'',
    last_name:'',
    mobile_no:'',
    email:'',
    wallet_amount:'',
    points:'',
    dob:'',
    security_question:'',
    sq_answer:'',
    nickname:'',
    gender:'',
    address:''
  }

  constructor(private router: Router,
              private alertCtrl: AlertController,
              public toastCtrl: ToastController,
              private actionSheetCtrl: ActionSheetController,
              private userservice: UserService
  ) { this.userData.user_id = localStorage.getItem(`setting:user_id`);
    this.userData.role_id = localStorage.getItem(`setting:role_id`);
    this.userData.first_name = localStorage.getItem(`setting:first_name`);
    this.userData.last_name = localStorage.getItem(`setting:last_name`);
    this.userData.mobile_no = localStorage.getItem(`setting:mobile_no`);
    this.userData.email = localStorage.getItem(`setting:email`);
    this.userData.wallet_amount = localStorage.getItem(`setting:wallet_amount`);
    this.userData.points = localStorage.getItem(`setting:points`);
    this.userData.dob = localStorage.getItem(`setting:dob`);
    this.userData.security_question = localStorage.getItem(`setting:security_question`);
    this.userData.sq_answer = localStorage.getItem(`setting:sq_answer`);
    this.userData.nickname = localStorage.getItem(`setting:nickname`);
    this.userData.gender = localStorage.getItem(`setting:gender`);
    this.userData.address = localStorage.getItem(`setting:address`);
  }

  ngOnInit() {
  }
  segmentChanged(ev: any) {
    const page = ev.detail.value
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

  async updateUserData(label) {
    console.log(label);
    let updateData: any = {
                user_id:'',
                nickname:'',
                address:'',
                security_question:'',
                sq_answer:''
              };
    if (label == "nickname"){
      const alert = await this.alertCtrl.create({
        cssClass: 'alert-zappy',
        mode:'ios',
animated:true,
        header: 'Zappy',
        inputs: [
          {
            name: 'nickname',
           // mode:'ios'
           // type: "text"
          }
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
            
            }
          }, {
            text: 'Update',
            handler: async (alertData) => {
              updateData.user_id = parseInt(this.userData.user_id);
              updateData.nickname = alertData.nickname;
              this.userservice.updateUserProfile(updateData).subscribe(async(resp)=>{
              if (resp.status == appConfig.statusCode.ok) {
                    this.updateToast('Nickname');
                    localStorage.setItem(`setting:${label}`,alertData.nickname);            
                    if (alertData.nickname){
                        this.userData.nickname = alertData.nickname;
                    }
              }
            });
              
            }
          }
        ]
      });
      await alert.present();
    }
    if (label == "address"){
      const alert = await this.alertCtrl.create({
        cssClass: 'alert-zappy',
        mode:'ios',
animated:true,
        header: 'Zappy',
        inputs: [
          {
            name: 'address',
         //   mode:'ios'
           // type: "text"
          }
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {}
          }, {
            text: 'Update',
            handler: async (alertData) => {
              updateData.user_id = parseInt(this.userData.user_id);
              updateData.address = alertData.address;
              this.userservice.updateUserProfile(updateData).subscribe(async(resp)=>{
              if (resp.status == appConfig.statusCode.ok) {
                    this.updateToast('Address');
                     localStorage.setItem(`setting:${label}`,alertData.address);                        
                    if (alertData.address){
                        this.userData.address = alertData.address;
                    }
              }
            });

            }
          }
        ]
      });
      await alert.present();
    }
    if (label == 'security_question'){
      let sq_1 = "What was your first pet's name";
      let sq_2 = "What's the first name of your oldest cousin";
      let sq_3 = "What's the first name of your mother";
      const actionSheet = await this.actionSheetCtrl.create({
        header: 'Select a security question',
        buttons: [
          {
            text: `What was your first pet's name?`,
            handler: () => {
              updateData.user_id = parseInt(this.userData.user_id);
              updateData.security_question = sq_1;
              this.userservice.updateUserProfile(updateData).subscribe(async(resp)=>{
                if (resp.status == appConfig.statusCode.ok) {
                      this.updateToast('Security Question');
                      localStorage.setItem(`setting:${label}`,sq_1);            
                      this.userData.security_question = sq_1;
                } 
              });
            }
          }, 
          {
            text: `What's the first name of your oldest cousin?`,
            handler: () => {
              updateData.user_id = parseInt(this.userData.user_id);
              updateData.security_question = sq_2;
              this.userservice.updateUserProfile(updateData).subscribe(async(resp)=>{
                if (resp.status == appConfig.statusCode.ok) {
                      this.updateToast('Security Question');
                      localStorage.setItem(`setting:${label}`,sq_2);            
                      this.userData.security_question = sq_2;
                } 
              });
            }
          }, 
          {
            text: `What's the first name of your mother?`,
            handler: () => {
              updateData.user_id = parseInt(this.userData.user_id);
              updateData.security_question = sq_3;
              this.userservice.updateUserProfile(updateData).subscribe(async(resp)=>{
                if (resp.status == appConfig.statusCode.ok) {
                      this.updateToast('Security Question');
                      localStorage.setItem(`setting:${label}`,sq_3);            
                      this.userData.security_question = sq_3;
                } 
              });
            }  
          }, 
          {
            
            icon: 'close',
            role: 'cancel',
            handler: () => {}
          }
        ]
      });
      await actionSheet.present();
      /*
      const alert = await this.alertCtrl.create({
        cssClass: 'alert-zappy',
        mode:'ios',
animated:true,
        header: 'Zappy',
        inputs: [
          {
            name: 'security_question',
            mode:'ios',
animated:true,
            type: 'select'
          }
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
            
            }
          }, {
            text: 'Update',
            handler: async (alertData) => {
              const toast = await this.toastCtrl.create({
                message: `${label} updated successfully.`,
                duration: 2000
              });
              await toast.present();
              localStorage.setItem(`setting:${label}`,alertData.security_question);            
              if (alertData.security_question){
                  this.userData.security_question = alertData.security_question;
              }
            }
          }
        ]
      });
      await alert.present();
      */
    }
    if (label == 'sq_answer'){
      const alert = await this.alertCtrl.create({
        cssClass: 'alert-zappy',
        mode:'ios',
animated:true,
        header: 'Zappy',
        inputs: [
          {
            name: 'sq_answer',
           // type: 'text'
          }
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {}
          }, 
          {
            text: 'Update',
            handler: async (alertData) => {
              updateData.user_id = parseInt(this.userData.user_id);
              updateData.sq_answer = alertData.sq_answer;
              this.userservice.updateUserProfile(updateData).subscribe(async(resp)=>{
                if (resp.status == appConfig.statusCode.ok) {
                      this.updateToast('Security Answer');
                      localStorage.setItem(`setting:${label}`,alertData.sq_answer);                        
                      if (alertData.sq_answer){
                          this.userData.sq_answer = alertData.sq_answer;
                      }
                }
              });
            }
          }
        ]
      });
      await alert.present();
    }
  }

  async updateToast(inputData) {
    const toast = await this.toastCtrl.create({
                message: `${inputData} updated successfully.`,
                duration: 2000
    });
    await toast.present();
  }
  userUpgrade(){
    this.router.navigate(['/user-upgrade']);
  }
}
