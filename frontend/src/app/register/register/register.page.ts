import { OtpPage } from './../../otp/otp/otp.page';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { OtpService } from '../../services/otp-service';
import { StorageService } from '../../services/storage-service';
import {appConfig} from '../../core/config/config';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['../../../assets/css/main.scss', './register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm = {
    mobile_no:''
  }
  mobile_pattern: any = appConfig.pattern.PHONE_NO;
  invalidMobileNo: boolean = false;

  constructor(private router: Router,
              private otpservice: OtpService,
              private alertCtrl: AlertController,
              private storageservice: StorageService,
              public navCtrl: NavController
              ) { }

  ngOnInit() {

     //console.log(this.storageservice.get('name'));

  }

  async verifyMobileNo() {
    let converted_mobile = this.registerForm.mobile_no.toString();
    if (this.registerForm.mobile_no == '') {
        const alert = await this.alertCtrl.create({
        cssClass: 'my-alert',
        header: 'Zappy',
        subHeader: '',
        mode:'ios',
        message: 'Mobile No. field is required!',
        buttons: ['OK']
      });
  
      await alert.present();    
    }else if (converted_mobile.length < 13) {
          const alert = await this.alertCtrl.create({
          cssClass: 'my-alert',
          header: `Zappy`,
          subHeader: '',
          mode:'ios',
          message: `<p>Invalid Mobile No.</p><p>Valid Format: 234XXXXXXXXXX</p>`,
          buttons: ['OK']
        });

        await alert.present();    
    }else{
        console.log('Mobile No: ', this.registerForm.mobile_no);
          var otp = Math.floor(1000 + Math.random() * 9000);
          this.otpservice
          .otpVerifyMobileNo(converted_mobile, otp)
          .subscribe(async (resp) => {
            
            console.log(resp);
              if (resp.status == appConfig.statusCode.created) {
                 
                 localStorage.setItem(`setting:mobile_no`,resp.user_mobile_no);
                 //console.log('PERSISTENT DATA', this.storageservice.get('user_mobile_no'));
                  let m = this.registerForm.mobile_no
                  this.router.navigate(['/otp', m]);
              } else {
                const alert = await this.alertCtrl.create({
                  cssClass: 'my-alert',
                  header: 'Zappy',
                  subHeader: '',
                  mode:'ios',
                  message: resp.message,
                  buttons: ['OK']
                });
            
                await alert.present(); 
              }
          });
    }
  }

}
