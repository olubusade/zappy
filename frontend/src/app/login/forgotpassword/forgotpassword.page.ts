import { OtpService } from './../../services/otp-service';
import { AlertController } from '@ionic/angular';
import { appConfig } from 'src/app/core/config/config';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss','../../../assets/css/main.scss'],
})
export class ForgotpasswordPage implements OnInit {
  forgotPasswordForm: FormGroup;
  submitted = false;
  userEmail:any;
  constructor(private otpService: OtpService,
              private fb: FormBuilder,
              private alertCtrl: AlertController,
              private router: Router,
              private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    
    this.forgotPasswordForm = this.fb.group({
     // email: ['', [Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
     email: ['', [Validators.pattern(appConfig.pattern.EMAIL)]]
    });
  }

  async sendToMail() {
    this.submitted = true;
    this.userEmail = this.forgotPasswordForm.value['email'];
    if(this.userEmail==''){
      const alert = await this.alertCtrl.create({
        cssClass: 'my-alert',
        header: 'Zappy',
        mode:'ios',
        message: `Email field is required`,
        buttons: [
          {
            text: 'Okay',
            role: 'yes',
            cssClass: 'secondary',
            handler: () => {}
          }
        ]
      });
      await alert.present();
    }else{
      var otp = Math.floor(1000 + Math.random() * 9000);
      this.otpService.sendPasswordResetOtp(this.userEmail, otp).subscribe(async(resp)=>{
        console.log(resp);
        if (resp.status == appConfig.statusCode.notFound){
         const alert = await this.alertCtrl.create({
           cssClass: 'my-alert',
           header: 'Zappy',
           mode:'ios',
           message: resp.message,
           buttons: [
             {
              text: 'Okay',
              role: 'yes',
              cssClass: 'secondary',
              handler: () => {}
             }
           ]
         });
     
         await alert.present();
        }
        else if (resp.status == appConfig.statusCode.ok) {
          const alert = await this.alertCtrl.create({
            cssClass: 'my-alert',
            header: 'Zappy',
            mode:'ios',
            message: resp.message,
            buttons: [
              {
                text: 'Okay',
                role: 'yes',
                cssClass: 'secondary',
                handler: () => {
                  this.router.navigate(['/password-reset-otp', this.userEmail]);
                }
              }
            ]
          });
      
          await alert.present();
        }
      })  
    }
  }  
  get forgotPasswordCtrl() {
    return this.forgotPasswordForm.controls;
  }
}
