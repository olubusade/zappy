import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { OtpService } from '../../services/otp-service';
import { StorageService } from '../../services/storage-service';
import { appConfig } from "./../../core/config/config";
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-password-reset-otp',
  templateUrl: './password-reset-otp.page.html',
  styleUrls: ['./password-reset-otp.page.scss','../../../assets/css/main.scss'],
})
export class PasswordResetOtpPage implements OnInit {  
  otpForm = {
    digit1 : '',
    digit2 : '',
    digit3 : '',
    digit4 : ''
  }
  stored_mobile_no :any;
  public phone_no:any;
  userData = {
    email:''
  }

  constructor(private router: Router,
              private otpservice: OtpService,
              private alertCtrl: AlertController,
              private storageservice: StorageService,
              private route: ActivatedRoute
              ) { }

  ngOnInit() {
      
       this.route.params.subscribe(params => {
        this.userData.email = params['e']; 
      });
      console.log('User email: ', this.userData.email);
  }

  async submitOTP() {
    if (this.otpForm.digit1 == ''||
         this.otpForm.digit2 == '' ||
         this.otpForm.digit3 == '' ||
         this.otpForm.digit4 == ''
        ) {
        const alert = await this.alertCtrl.create({
                        cssClass: 'my-alert',
                        header: 'Zappy',
                        mode:'ios',
                        message: 'All fields are required!',
                        buttons: ['OK']
                      });
      await alert.present();    
    }else{
      //Concatenate all the otp digits into an array
      let joined_otp =  Object.values(this.otpForm).reduce((r,c) => r.concat(c), [])
      //Convert the array to string and remove the comma 
      let otp_value = joined_otp.toString().replace(/,/g, '')
      this.otpservice
      .verifyPasswordResetOtp(this.userData.email, otp_value)
      .subscribe(async (resp) => {
        
        if (resp.status == appConfig.statusCode.accepted) {
                console.log(resp);
                const alert = await this.alertCtrl.create({
                  cssClass: 'my-alert',
                  mode:'ios',
                  header: 'Zappy',
                  message: resp.message,
                  buttons: ['OK']
                });
                await alert.present();
                let e = this.userData.email;
                this.router.navigate(['/resetpassword', e]);
               console.log('Navigate to password reset page');
        }else {
                console.log(resp);
                const alert = await this.alertCtrl.create({
                  cssClass: 'my-alert',
                  mode:'ios',
                  header: 'Zappy',
                  message: resp.message,
                  buttons: ['OK']
                });
                await alert.present();
        }                
      });
    }
  }  

}
