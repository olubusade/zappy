import { UserService } from './../../../services/user.service';
import { PopoverController, ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { appConfig } from "../../../core/config/config";
@Component({
  selector: 'app-alerts-preference',
  templateUrl: './alerts-preference.component.html',
  styleUrls: ['./alerts-preference.component.scss', '../../../../assets/css/main.scss'],
})
export class AlertsPreferenceComponent implements OnInit {

  userData:any = {
    alert_pref:'',
    user_id:''
  }
  alert_notification_pref: any = 
  [
    "SMS Only",
    "Email Only",
    "SMS & Email",
    "Push Notification"
  ]

  constructor(private popCtrl: PopoverController,
              private toastCtrl: ToastController,
              private userservice: UserService) { }

  ngOnInit() {
    this.userData.user_id = localStorage.getItem(`setting:user_id`);
    this.userData.alert_pref = localStorage.getItem(`setting:alert_preference`);
  }

  _dismiss(item:any){
   //console.log(item);
    this.popCtrl.dismiss({
      "fromPopover": item
    });

    //send to backend
    let updateData:any = {
      user_id:'',
      alert_preference:''
    }
    updateData.user_id = parseInt(this.userData.user_id);
    updateData.alert_preference = item;
    this.userservice.updateUserProfile(updateData).subscribe(async(resp)=>{
      
      //if the update is successful at backend then update the localstorage
      if (resp.status == appConfig.statusCode.ok) { 
            localStorage.setItem(`setting:alert_preference`,item);                        
            if (item){
                this.userData.alert_pref = item;
                console.log(this.userData.alert_pref);
            }
            this.updateToast(item);
      }
    });
  }
  async updateToast(inputData:any) {
    await this.toastCtrl.create({
        message: `${inputData} set for notification alert preference.`,
        duration: 1000
    }).then((res) => res.present());
  }

}

