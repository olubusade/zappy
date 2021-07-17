import { PopoverController, ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alerts-preference',
  templateUrl: './alerts-preference.component.html',
  styleUrls: ['./alerts-preference.component.scss', '../../../../assets/css/main.scss'],
})
export class AlertsPreferenceComponent implements OnInit {

  userData = {
    alert_pref:''
  }
  alert_notification_pref: any = 
  [
    "SMS Only",
    "Email Only",
    "SMS & Email",
    "Push Notification"
  ]

  constructor(private popCtrl: PopoverController,private toastCtrl: ToastController) { }

  ngOnInit() {
    this.userData.alert_pref = localStorage.getItem(`setting:notification_alert_pref`);
  }

  _dismiss(item:string){
    console.log(item);
    this.popCtrl.dismiss({
      "fromPopover": item
    });

    //send to backend

    //if the update is successful at backend then update the localstorage
    localStorage.setItem(`setting:notification_alert_pref`,item);
    this.updateToast(item);
  }
  async updateToast(inputData:any) {
    await this.toastCtrl.create({
        message: `${inputData} set for notification alert preference.`,
        duration: 1000
    }).then((res) => res.present());
  }

}

