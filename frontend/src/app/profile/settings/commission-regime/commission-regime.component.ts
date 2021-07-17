import { Component, OnInit } from '@angular/core';
import { PopoverController, ToastController } from '@ionic/angular';
@Component({
  selector: 'app-commission-regime',
  templateUrl: './commission-regime.component.html',
  styleUrls: ['./commission-regime.component.scss'],
})
export class CommissionRegimeComponent implements OnInit {
  userData = {
    commission_regime:''
  }
  constructor(private popCtrl: PopoverController,
    private toastCtrl: ToastController) { }

  ngOnInit() {
    this.userData.commission_regime = localStorage.getItem(`setting:commission_regime`);
  }

  _dismiss(item:string){
    console.log(item);
    this.popCtrl.dismiss({
      "fromPopover": item
    });

    //send to backend

    //if the update is successful at backend then update the localstorage
    localStorage.setItem(`setting:commission_regime`,item);
    this.updateToast();
  }
  async updateToast() {
    await this.toastCtrl.create({
        message: `Commission regime updated successfully`,
        duration: 1000
    }).then((res) => res.present());
  }

}
