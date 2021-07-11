import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController, LoadingController, ToastController } from '@ionic/angular';
import { appConfig } from 'src/app/core/config/config';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss', '../../../assets/css/main.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router,
              private alertCtrl : AlertController,
              private loadingCtrl: LoadingController,
              private userService : UserService,
              private toastCtrl: ToastController,
              private faio: FingerprintAIO) { }

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

    if (!this.user_mobile_no 
        || this.user_mobile_no == null 
        ||this.user_first_name == null 
        ||this.user_last_name == null 
        || !this.user_first_name 
        || !this.user_last_name) 
      {
        this.showName = false;
      }
    console.log('phone:',this.user_mobile_no);
    console.log('first:',this.user_first_name);
    console.log('last:',this.user_last_name);
    console.log(this.showName);
  }

  async login() {
    let converted_mobile = this.user_mobile_no ? this.user_mobile_no : this.loginData.mobile_no.toString();
    if(this.loginData.password == '' || this.loginData.password == null) {
      const alert = await this.alertCtrl.create({
        cssClass: 'my-alert',
        header: 'Zappy',
        subHeader: '',
        mode:'ios',
        animated:true,
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
          animated:true,
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
      animated:true,
      message: `<p>Invalid Mobile No.</p><p>Valid Format: 234XXXXXXXXXX</p>`,
      buttons: ['OK']
    });

    await alert.present();    
    } else {
        this.loginData.mobile_no = this.showName ? this.user_mobile_no : this.loginData.mobile_no.toString();
        console.log(this.loginData)
        //loader
        const loading = await this.loadingCtrl.create({
          cssClass: 'loading',
          message: '',
          duration: 300,
          animated: true,
          spinner: 'bubbles'
        });
        await loading.present();
        this.userService.loginUser(this.loginData).subscribe(async(resp)=>{
          
          await loading.dismiss();
          if(!resp){
            const alert = await this.alertCtrl.create({
              cssClass: 'my-alert',
              header: 'Zappy',
              subHeader: '',
              mode:'ios',
              animated:true,
              message: 'Oops! Something is wrong',
              buttons: ['OK']
            });
            await alert.present(); 
          }
          else if (resp.status == appConfig.statusCode.found) {
            this.localstorageData(resp);
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
              animated:true,
              message: resp.message,
              buttons: ['OK']
            });
            await alert.present(); 
          }
        });
    }
  }

  async loginWithFingerprint(){
      let converted_mobile = this.user_mobile_no ? this.user_mobile_no : this.loginData.mobile_no.toString();
      if(!this.showName && this.loginData.mobile_no =='') {
        const alert = await this.alertCtrl.create({
          cssClass: 'my-alert',
          header: 'Zappy',
          subHeader: '',
          mode:'ios',
          animated:true,
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
        animated:true,
        message: `<p>Invalid Mobile No.</p><p>Valid Format: 234XXXXXXXXXX</p>`,
        buttons: ['OK']
      });
      await alert.present();    
      }else{
        this.faio.isAvailable().then(() => {
          this.faio.show({}).then(async (val) => {
              if (val == "biometric_success") {
                //Data to be sent to backend for login starts here  
                this.loginData.mobile_no = this.showName ? this.user_mobile_no : this.loginData.mobile_no.toString();
                console.log(this.loginData)
                //loader
                const loading = await this.loadingCtrl.create({
                  cssClass: 'loading',
                  message: '',
                  duration: 300,
                  animated: true,
                  spinner: 'bubbles'
                });
                await loading.present();
                this.userService.loginUserWithBiometric(this.loginData).subscribe(async(resp)=>{
                  
                  await loading.dismiss();
                  if(!resp){
                    const alert = await this.alertCtrl.create({
                      cssClass: 'my-alert',
                      header: 'Zappy',
                      subHeader: '',
                      mode:'ios',
                      animated:true,
                      message: 'Oops! Something is wrong',
                      buttons: ['OK']
                    });
                    await alert.present(); 
                  }
                  else if (resp.status == appConfig.statusCode.found) {
                    console.log(resp);
                    this.localstorageData(resp);
                  }else {
                    const alert = await this.alertCtrl.create({
                      cssClass: 'my-alert',
                      header: 'Zappy',
                      subHeader: '',
                      mode:'ios',
                      animated:true,
                      message: resp.message,
                      buttons: ['OK']
                    });
                    await alert.present(); 
                  }
                });
             }
              console.log(JSON.stringify(val));
          },async (err) => {
              console.log(JSON.stringify(err))
              if(JSON.stringify(err.code) == "-102"){
                //Authentication failed comes here
                const alert = await this.alertCtrl.create({
                  cssClass: 'my-alert',
                  header: 'Zappy',
                  subHeader: '',
                  mode:'ios',
                  animated:true,
                  message: err.message,
                  buttons: ['OK']
                });
                await alert.present(); 
                console.log(err.message);
              }
          })
        },async (err) => {
          const alert = await this.alertCtrl.create({
            cssClass: 'my-alert',
            header: 'Zappy',
            subHeader: '',
            mode:'ios',
            animated:true,
            message: `Fingerprint not available!`,
            buttons: ['OK']
          });
          await alert.present(); 
          console.log("Fingerprint not available!",err);
        })
      }
      
  }

  forgotPassword() {
    this.router.navigate(['/forgotpassword'])
  }

  register() {
    this.router.navigate(['/register'])
  } 

  async localstorageData(resp){
    const auxData = JSON.parse(resp.auxData);
    localStorage.setItem(`setting:user_id`,resp.data.id);
    localStorage.setItem(`setting:role_id`,resp.data.role_id);
    localStorage.setItem(`setting:first_name`,resp.data.first_name);
    localStorage.setItem(`setting:last_name`,resp.data.last_name);
    localStorage.setItem(`setting:email`,resp.data.email);
    localStorage.setItem(`setting:mobile_no`,resp.data.mobile_no);
    localStorage.setItem(`setting:email`,resp.data.email);
    localStorage.setItem(`setting:wallet_amount`,resp.data.wallet_amount);
    localStorage.setItem(`setting:points`,resp.data.points);
    localStorage.setItem(`setting:access_token`,resp.data.access_token);
    localStorage.setItem(`setting:expiresIn`,resp.data.expiresIn);
    localStorage.setItem(`setting:dob`,resp.data.dob);
    localStorage.setItem(`setting:security_question`,resp.data.security_question);
    localStorage.setItem(`setting:sq_answer`,resp.data.security_answer);
    localStorage.setItem(`setting:nickname`,resp.data.nickname);
    localStorage.setItem(`setting:gender`,resp.data.gender);
    localStorage.setItem(`setting:address`,resp.data.address);
    localStorage.setItem(`setting:referral_code`,resp.data.referral_code);
    localStorage.setItem(`setting:auxData`, JSON.stringify(auxData));
    const toast = await this.toastCtrl.create({
      message: `Log in successful`,
      duration: 2000
    });
    toast.present();
    this.router.navigate(['/user-dashboard'])
  }
}
