import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { StorageService } from '../../services/storage-service';
import { appConfig } from "./../../core/config/config";
import { PasswordMatch } from './../../core/utils/password.validator';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.page.html',
  styleUrls: ['./resetpassword.page.scss','../../../assets/css/main.scss'],
})
export class ResetpasswordPage implements OnInit {
  email:any;
  resetPasswordForm: FormGroup;
  resetPasswordData:any;
  submitted = false;
  userRespData:any = {
    user_id:'',
    first_name:''
  }
  constructor( private userService: UserService,
    private alertCtrl: AlertController,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
      this.route.params.subscribe(params => {
        this.email = params['e']; 
      });

    this.resetPasswordForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(6)],Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')],
      confirmpassword: ['', [Validators.required, Validators.minLength(6)]]

    }, {
      validator: PasswordMatch('password', 'confirmpassword')
    });
  }
  async resetPassword(){
    this.submitted = true;
    if (this.resetPasswordForm.invalid){
      const alert = await this.alertCtrl.create({
        cssClass: 'my-alert',
        header: 'Zappy',
        mode:'ios',
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
    } else if (!this.resetPasswordFormCtrl.confirmpassword.errors?.passwordMismatch) {
       
        this.resetPasswordData = this.resetPasswordForm.value;
        this.resetPasswordData.email = this.email;
        //Are you sure you want to reset your password?
        const alert = await this.alertCtrl.create({
          cssClass: 'my-alert',
          header: 'Zappy',
          mode:'ios',
          message: 'Are you sure you want to reset your password?',
          buttons: [
            {
              text: 'Yes',
              handler: () => {
                //send data to backend
                this.userService.resetUserPassword(this.resetPasswordData).subscribe(async(resp)=>{
                  console.log(resp);
                if (resp.status == appConfig.statusCode.conflict){
                  const alert = await this.alertCtrl.create({
                    cssClass: 'my-alert',
                    header: 'Zappy',
                    mode:'ios',
                    message: resp.message,
                    buttons: [
                      {
                        text: 'Reset',
                        role: 'yes',
                        cssClass: 'secondary',
                        handler: () => {
                          this.router.navigate(['/resetpassword'])
                        }
                      }, {
                        text: 'Cancel',
                        handler: () => {}
                      }
                    ]
                  });
              
                  await alert.present();
                } 
                else if (resp.status == appConfig.statusCode.accepted) {
                    const alert = await this.alertCtrl.create({
                      cssClass: 'my-alert',
                      header: 'Zappy',
                      mode:'ios',
                      message: resp.message,
                      buttons: [
                        {
                          text: 'Proceed to Login',
                          role: 'yes',
                          cssClass: 'primary',
                          handler: () => {
                              //route to user-dashboard
                              this.router.navigate(['/login'])
                          }
                        }
                      ]
                    });
                    await alert.present();
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
  
  get resetPasswordFormCtrl() {
    return this.resetPasswordForm.controls;
  }
}
