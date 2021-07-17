import { appConfig } from './../../../core/config/config';
import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { PopoverController, ToastController } from '@ionic/angular';
@Component({
  selector: 'app-commission-regime',
  templateUrl: './commission-regime.component.html',
  styleUrls: ['./commission-regime.component.scss'],
})
export class CommissionRegimeComponent implements OnInit {
  userData = {
    user_id:'',
    commission_regime:''
  }
  constructor(private popCtrl: PopoverController,
    private toastCtrl: ToastController,
    private userservice: UserService) { }

  ngOnInit() {
    this.userData.user_id = localStorage.getItem(`setting:user_id`);
    this.userData.commission_regime = localStorage.getItem(`setting:commission_regime`);
  }

  _dismiss(item:string){
    console.log(item);
    this.popCtrl.dismiss({
      "fromPopover": item
    });

    //send to backend
    let updateData:any = {
      user_id:'',
      commission_regime:''
    }
    updateData.user_id = parseInt(this.userData.user_id);
    updateData.commission_regime = item;
    this.userservice.updateUserProfile(updateData).subscribe(async(resp)=>{
      
      //if the update is successful at backend then update the localstorage
      if (resp.status == appConfig.statusCode.ok) { 
      //if the update is successful at backend then update the localstorage
          localStorage.setItem(`setting:commission_regime`,item);                        
          if (item){
              this.userData.commission_regime = item;
              console.log(this.userData.commission_regime);
          }
          this.updateToast(item);
      }
    });

  }
  async updateToast(inputData:any) {
    await this.toastCtrl.create({
        message: `Commission Regime updated to ${inputData}`,
        duration: 1000
    }).then((res) => res.present());
  }

}
