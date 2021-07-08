import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { OtpService } from '../../services/otp-service';
import { StorageService } from '../../services/storage-service';
import { appConfig } from "./../../core/config/config";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-email-otp',
  templateUrl: './email-otp.page.html',
  styleUrls: ['./email-otp.page.scss', '../../../assets/css/main.scss'],
})
export class EmailOtpPage implements OnInit {
  otpForm = {
    digit1 : '',
    digit2 : '',
    digit3 : '',
    digit4 : ''
  }
  mobile_no :any;
  email: any;
  
  constructor(private router: Router,
    private otpservice: OtpService,
    private alertCtrl: AlertController,
    private storageservice: StorageService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.mobile_no = params['m']; 
      this.email = params['e']; 
    });
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
      .verifyEmailOtp(this.email, otp_value)
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
                let m = this.mobile_no;
                let e = this.email;
                this.router.navigate(['/signup',m,e]);
               
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

  async resendOTP() {
    
      var otp = Math.floor(1000 + Math.random() * 9000);
      this.otpservice
      .otpValidateEmail(this.mobile_no,this.email, otp)
      .subscribe(async (resp) => {
        
        console.log(resp);
          if (resp.status == appConfig.statusCode.created) {
              //save the mobile number and it's token in the local storage
              const alert = await this.alertCtrl.create({
                cssClass: 'my-alert',
                header: 'Zappy',
                subHeader: '',
                mode:'ios',
                message: `OTP resent successfully`,
                buttons: ['OK']
              });
              await alert.present(); 
              
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

    moveOnMax(otp2){
      
        document.getElementById('#otp2').focus();
      
    }
}
