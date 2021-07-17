import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { OtpService } from '../../services/otp-service';
import { StorageService } from '../../services/storage-service';
import { appConfig } from "./../../core/config/config";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-pin-reset-otp',
  templateUrl: './pin-reset-otp.page.html',
  styleUrls: ['./pin-reset-otp.page.scss','./../../../assets/css/main.scss'],
})
export class PinResetOtpPage implements OnInit {

  otpForm = {
    digit1 : '',
    digit2 : '',
    digit3 : '',
    digit4 : ''
  }
  stored_mobile_no :any;
  
  constructor(private router: Router,
              private otpservice: OtpService,
              private alertCtrl: AlertController,
              private storageservice: StorageService,
              private route: ActivatedRoute
              ) { 
               
              }


          ngOnInit() {
                this.route.params.subscribe(params => {
                 this.stored_mobile_no = params['m']; 
               });
               console.log('MY MOBILE NUMBER: ', this.stored_mobile_no);
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
               console.log('otp length:',otp_value.length)
               this.otpservice
               .verifyMobileNoOtp(this.stored_mobile_no, otp_value)
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
                         let m = this.stored_mobile_no;
                        // this.router.navigate(['/signup',m]);
                        this.router.navigate(['/validate-email',m]);
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
             .otpValidateMobileNo(this.stored_mobile_no, otp)
             .subscribe(async (resp) => {
               
               console.log(resp);
                 if (resp.status == appConfig.statusCode.created) {
                     //save the mobile number and it's token in the local storage
                     this.storageservice.set('user_mobile_no', resp.user_mobile_no);
                     this.storageservice.set('access_token', resp.access_token);
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
 }
         