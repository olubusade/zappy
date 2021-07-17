import { appConfig } from './../../../core/config/config';
import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { PopoverController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-automated-reports',
  templateUrl: './automated-reports.component.html',
  styleUrls: ['./automated-reports.component.scss'],
})
export class AutomatedReportsComponent implements OnInit {
  userData = {
    user_id:'',
    report_option:''
  }
  constructor(private popCtrl: PopoverController,
              private toastCtrl: ToastController,
              private userservice: UserService) { }

  ngOnInit() {
    this.userData.user_id = localStorage.getItem(`setting:user_id`);
    this.userData.report_option = localStorage.getItem(`setting:automated_report`);
    
  }

  _dismiss(item:string){
    console.log(item);
    this.popCtrl.dismiss({
      "fromPopover": item
    });

    //send to backend
    let updateData:any = {
      user_id:'',
      automated_report:''
    }
    updateData.user_id = parseInt(this.userData.user_id);
    updateData.automated_report = item;
    this.userservice.updateUserProfile(updateData).subscribe(async(resp)=>{
      
      //if the update is successful at backend then update the localstorage
      if (resp.status == appConfig.statusCode.ok) { 
      //if the update is successful at backend then update the localstorage
            localStorage.setItem(`setting:automated_report`,item);                        
            if (item){
                this.userData.report_option = item;
                console.log(this.userData.report_option);
            }
            this.updateToast(item);
      }
    });
    
  }
  async updateToast(inputData:any) {
    await this.toastCtrl.create({
        message: `Automated report updated to ${inputData}`,
        duration: 1000
    }).then((res) => res.present());
  }

}
