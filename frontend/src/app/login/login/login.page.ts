import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController, LoadingController } from '@ionic/angular';
import { appConfig } from 'src/app/core/config/config';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss', '../../../assets/css/main.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router,
              private alertCtrl : AlertController,
              private loadingCtrl: LoadingController,
              private userService : UserService) { }

  user_first_name = '';
  user_last_name = '';
  user_fullname = '';
  user_mobile_no:any;
  loginData = {
    user_id:'',
    mobile_no:'',
    password:''
  }
  mobile_pattern: any = appConfig.pattern.PHONE_NO;
  showName: boolean = true;
  ngOnInit() {
    this.loginData.user_id = localStorage.getItem(`setting:user_id`);
    this.user_mobile_no = localStorage.getItem(`setting:mobile_no`);
    this.user_first_name = localStorage.getItem(`setting:first_name`);
    this.user_last_name = localStorage.getItem(`setting:last_name`);
    
    
    this.user_fullname = this.user_first_name+' '+this.user_last_name
    console.log('Mobile:', this.loginData.mobile_no);

    if (!this.user_mobile_no || this.user_mobile_no == '' || this.user_mobile_no == null) {
   // if (!this.user_first_name || this.user_first_name == '' || this.user_first_name == null) {
        this.showName = false;
    }
  }

  async login() {
    let converted_mobile = this.user_mobile_no ? this.user_mobile_no : this.loginData.mobile_no.toString();
    if(this.loginData.password == '' || this.loginData.password == null) {
      const alert = await this.alertCtrl.create({
        cssClass: 'my-alert',
        header: 'Zappy',
        subHeader: '',
        mode:'ios',
        message: 'Password field is required!',
        buttons: ['OK']
      });
      await alert.present();  
    } else if(!this.showName && this.loginData.mobile_no =='') {
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
    } else {
        this.loginData.mobile_no = this.showName ? this.user_mobile_no : this.loginData.mobile_no.toString();
        console.log(this.loginData)
        this.userService.loginUser(this.loginData).subscribe(async(resp)=>{
          //loader
          const loading = await this.loadingCtrl.create({
            cssClass: 'loading',
            message: '',
            duration: 300,
            animated: true,
            spinner: 'bubbles'
          });
          await loading.present();
          if(!resp){
            const alert = await this.alertCtrl.create({
              cssClass: 'my-alert',
              header: 'Zappy',
              subHeader: '',
              mode:'ios',
              message: 'Oops! Something is wrong',
              buttons: ['OK']
            });
            await alert.present(); 
          }
          else if (resp.status == appConfig.statusCode.found) {
            console.log(resp);
            console.log(JSON.parse(resp.auxData));
            const auxData = JSON.parse(resp.auxData);
            
            localStorage.setItem(`setting:user_id`,resp.data.id);
            localStorage.setItem(`setting:role_id`,resp.data.role_id);
            localStorage.setItem(`setting:first_name`,resp.data.first_name);
            localStorage.setItem(`setting:last_name`,resp.data.last_name);
            localStorage.setItem(`setting:email`,resp.data.email);
            localStorage.setItem(`setting:mobile_no`,resp.data.mobile_no);
            localStorage.setItem(`setting:wallet_amount`,resp.data.wallet_amount);
            localStorage.setItem(`setting:points`,resp.data.points);
            localStorage.setItem(`setting:cashback`,resp.data.cashback==null ? '0' : resp.data.cashback);
            localStorage.setItem(`setting:access_token`,resp.data.access_token);
            localStorage.setItem(`setting:expiresIn`,resp.data.expiresIn);
            localStorage.setItem(`setting:auxData`, JSON.stringify(auxData));
            localStorage.setItem(`setting:sms_unit`,resp.data.sms_unit==null ? '0' : resp.data.sms_unit);
            localStorage.setItem(`setting:voice_sms_unit`,resp.data.voice_sms_unit==null ? '0' : resp.data.voice_sms_unit);
            localStorage.setItem(`setting:referral_bonus`,resp.data.referral_bonus==null ? '0' : resp.data.referral_bonus);
            
            this.router.navigate(['/user-dashboard'])
            //  await loading.onDidDismiss();
          //  console.log('Loading dismissed!');
        
          //  await loading.onDidDismiss();
          //  console.log('Loading dismissed with role:');
          
          }else {
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
  forgotPassword() {
    this.router.navigate(['/forgotpassword'])
  }

  register() {
    this.router.navigate(['/newlogin'])
  }

}
