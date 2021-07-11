import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController, LoadingController } from '@ionic/angular';
import { StorageService } from '../../services/storage-service';
import { appConfig } from "./../../core/config/config";
import { PasswordMatch } from './../../core/utils/password.validator';
import { UserService } from '../../services/user.service';
import { NavigationServiceService } from '../../services/navigation-service.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss', '../../../assets/css/main.scss'],
})
export class ChangePasswordPage implements OnInit {
  updatePasswordForm: FormGroup;
  submitted = false;
  userData:any;
  user_id:any;
  constructor( private router: Router,private navService: NavigationServiceService,
              private userService: UserService,
              private alertCtrl: AlertController,
              private toastCtrl: ToastController,
              private loadingCtrl: LoadingController,
              private storageservice: StorageService,
              private fb: FormBuilder,
              private route: ActivatedRoute
              ) { }

  ngOnInit() {
    this.user_id = localStorage.getItem(`setting:user_id`);
    
    this.updatePasswordForm = this.fb.group({
      old_password: ['', [Validators.required, Validators.minLength(6)]],
      new_password: ['', [Validators.required, Validators.minLength(6)],Validators.pattern(appConfig.pattern.PASSWORD)],
      confirm_new_password: ['', [Validators.required, Validators.minLength(6)]]
    }, {
      validator: PasswordMatch('new_password', 'confirm_new_password')
    });
  }

  async updatePassword(){
    this.submitted = true;
    if (this.updatePasswordForm.invalid){
      const alert = await this.alertCtrl.create({
        cssClass: 'my-alert',
        header: 'Zappy',
        mode: 'ios',
        message: `All fields are required`,
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
    } else if (this.updatePasswordFormCtrl.confirm_new_password.errors?.passwordMismatch) {
        return;
    }else{
      this.userData = this.updatePasswordForm.value;
      this.userData.user_id = parseInt(this.user_id);
      console.log(this.userData);
      //Are you sure you want to update your password?
      const alert = await this.alertCtrl.create({
        cssClass: 'my-alert',
        header: 'Zappy',
        mode: 'ios',
        animated: true,
        message: 'Are you sure you want to update your password?',
        buttons: [
          {
            text: 'Yes',
            handler: async () => {
              //loader
               const loading = await this.loadingCtrl.create({
                 cssClass: 'loading',
                 message: '',
                 duration: 300,
                 animated: true,
                 spinner: 'bubbles'
               });
               await loading.present();
              this.userService.updateUserPassword(this.userData).subscribe(async(resp)=>{
                console.log(resp);
                await loading.dismiss();
               if (resp.status == appConfig.statusCode.conflict){
                 const alert = await this.alertCtrl.create({
                   cssClass: 'my-alert',
                   header: 'Zappy',
                   mode: 'ios',
                   message: resp.message,
                   buttons: [
                     {
                       text: 'Ok',
                       role: 'yes',
                       cssClass: 'secondary',
                       handler: () => {  
                       }
                     }
                   ]
                 });
                 await alert.present();
               }
               else if (resp.status == appConfig.statusCode.notFound){
                 const alert = await this.alertCtrl.create({
                   cssClass: 'my-alert',
                   header: 'Zappy',
                   mode: 'ios',
                   message: resp.message,
                   buttons: [
                     {
                       text: 'Ok',
                       role: 'yes',
                       cssClass: 'secondary',
                       handler: () => { 
                       }
                     }
                   ]
                 });
             
                 await alert.present();
               }  
               else if (resp.status == appConfig.statusCode.found) {
                 
                  const toast = await this.toastCtrl.create({
                    message: resp.message,
                    duration: 2000
                  });
                  toast.present();
                }
              });
            }
          },
          {
            text: 'Dismiss',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {}
          }
        ]
      });
      await alert.present();  
    }
  }
  gotoService() {
    this.router.navigate(['/user-dashboard/profile/security'])
  }
  goBack() {
    this.navService.navigateToPreviousPage();
  }
  get updatePasswordFormCtrl() {
    return this.updatePasswordForm.controls;
  }
}
