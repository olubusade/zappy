import { OtpPage } from './../../otp/otp/otp.page';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { OtpService } from '../../services/otp-service';
import { StorageService } from '../../services/storage-service';
import {appConfig} from '../../core/config/config';


@Component({
  selector: 'app-validate-email',
  templateUrl: './validate-email.page.html',
  styleUrls: ['./validate-email.page.scss','../../../assets/css/main.scss'],
})
export class ValidateEmailPage implements OnInit {
  validateEmailForm = {
    email:''
  }
  userData:any;
  mobile_no:any;
  email_pattern: any = appConfig.pattern.EMAIL;
  invalidMobileNo: boolean = false;

  constructor(
              private router: Router,
              private otpservice: OtpService,
              private alertCtrl: AlertController,
              public navCtrl: NavController,
              private route: ActivatedRoute
  ) { 
    
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.mobile_no = params['m']; 
    });
  }

  async verifyEmail() {
    let converted_email = this.validateEmailForm.email.toString();
    if (this.validateEmailForm.email == '') {
        const alert = await this.alertCtrl.create({
        cssClass: 'my-alert',
        header: 'Zappy',
        subHeader: '',
        mode:'ios',
        message: 'E-mail field is required!',
        buttons: ['OK']
      });
  
      await alert.present();    
    }else {
        this.validateEmail();
    }
    /*
    else if (converted_mobile.length < 13) {
          const alert = await this.alertCtrl.create({
          cssClass: 'my-alert',
          header: `Zappy`,
          subHeader: '',
          mode:'ios',
          message: `<p>Invalid Mobile No.</p><p>Valid Format: 234XXXXXXXXXX</p>`,
          buttons: ['OK']
        });

        await alert.present();    
    }*//*
    else{
      
      this.userData = this.validateEmailForm;
      this.userData.mobile_no = parseInt(this.mobile_no);

        console.log('USER DATA', this.userData);
          var otp = Math.floor(1000 + Math.random() * 9000);
          this.otpservice
          .otpValidateEmail(this.userData.mobile_no,this.userData.email, otp)
          .subscribe(async (resp) => {
            
            console.log(resp);
              if (resp.status == appConfig.statusCode.created) {
                 
                 localStorage.setItem(`setting:mobile_no`,resp.user_mobile_no);
                 localStorage.setItem(`setting:email`,resp.user_email);
                 //console.log('PERSISTENT DATA', this.storageservice.get('user_mobile_no'));
                  let e = this.validateEmailForm.email
                  let m = this.mobile_no
                  this.router.navigate(['/email-otp', m, e]);
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
    */
  }

  async validateEmail() {
    if (appConfig.pattern.EMAIL.test(this.validateEmailForm.email)){
        this.userData = this.validateEmailForm;
        this.userData.mobile_no = parseInt(this.mobile_no);

        console.log('USER DATA', this.userData);
          var otp = Math.floor(1000 + Math.random() * 9000);
          this.otpservice
          .otpValidateEmail(this.userData.mobile_no,this.userData.email, otp)
          .subscribe(async (resp) => {
            
            console.log(resp);
              if (resp.status == appConfig.statusCode.created) {
                 
                 localStorage.setItem(`setting:mobile_no`,resp.user_mobile_no);
                 localStorage.setItem(`setting:email`,resp.user_email);
                 //console.log('PERSISTENT DATA', this.storageservice.get('user_mobile_no'));
                  let e = this.validateEmailForm.email
                  let m = this.mobile_no
                  this.router.navigate(['/email-otp', m, e]);
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

    }else{
      const alert = await this.alertCtrl.create({
        cssClass: 'my-alert',
        header: 'Zappy',
        subHeader: '',
        mode:'ios',
        message: 'Invalid email address!',
        buttons: ['OK']
      });
      await alert.present(); 
    }  
  }
}
