import { Component, OnInit } from '@angular/core';
import { PopoverController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-automated-reports',
  templateUrl: './automated-reports.component.html',
  styleUrls: ['./automated-reports.component.scss'],
})
export class AutomatedReportsComponent implements OnInit {
  userData = {
     report_option:''
  }
  constructor(private popCtrl: PopoverController,
              private toastCtrl: ToastController) { }

  ngOnInit() {
    this.userData.report_option = localStorage.getItem(`setting:automated_report`);
  }

  _dismiss(item:string){
    console.log(item);
    this.popCtrl.dismiss({
      "fromPopover": item
    });

    //send to backend

    //if the update is successful at backend then update the localstorage
    localStorage.setItem(`setting:automated_report`,item);
    this.updateToast();
  }
  async updateToast() {
    await this.toastCtrl.create({
        message: `Automated report option updated successfully`,
        duration: 1000
    }).then((res) => res.present());
  }

}
