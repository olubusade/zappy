import { TransactionPinPage } from './../transaction-pin/transaction-pin.page';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { StorageService } from '../../services/storage-service';
import { appConfig } from "./../../core/config/config";
import { PasswordMatch } from './../../core/utils/password.validator';
import { UserService } from '../../services/user.service';
//import { RegisterServiceService } from '../../services/register-service.service'


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
 
  mobile_no:any;
  pinPattern = appConfig.pattern.TRANSACTION_PIN;
  signUpForm: FormGroup;
  registerUserData:any;
  submitted = false;
  userRespData:any = {
    user_id:'',
    first_name:'',
    last_name: '',
    mobile_no:'',
    role_id:'',
    access_token:'',
    expiresIn:'',
    email:'',
    wallet_amount:'',
    points:'',
    dob:'',
    security_question:'',
    sq_answer:'',
    nickname:'',
    gender:'',
    address:'',
    referral_code:''
  }

  constructor(private userService: UserService,
              private alertCtrl: AlertController,
              private storageservice: StorageService,
              private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router
              ) {}

  ngOnInit() {
      this.route.params.subscribe(params => {
        this.mobile_no = params['m']; 
      });
      
      this.signUpForm = this.fb.group({
        first_name: ['', [Validators.required, Validators.minLength(3)]],
        last_name: ['', [Validators.required, Validators.minLength(3)]],
      //  mobile: [this.mobile_no, [Validators.required, Validators.pattern('^[0-9]+$')]],
        email: ['', [Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
        password: ['', [Validators.required, Validators.minLength(6)],Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')],
        confirmpassword: ['', [Validators.required, Validators.minLength(6)]],
        transaction_pin: ['', [Validators.required, Validators.minLength(4)]]
      }, {
        validator: PasswordMatch('password', 'confirmpassword')
      });
  }

  async signUp() {
      this.submitted = true;
      if (this.signUpForm.invalid){
        const alert = await this.alertCtrl.create({
          cssClass: 'my-alert',
          header: 'Zappy',
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
      } else if (this.signUpFormCtrl.confirmpassword.errors?.passwordMismatch) {
          return;
      } else {
        this.registerUserData = this.signUpForm.value;
        this.registerUserData.transaction_pin = this.signUpForm.value['transaction_pin'].toString();
        // this.registerUserData.mobile_no = parseInt(this.mobile_no);
        this.registerUserData.mobile_no = this.mobile_no;
        this.registerUserData.role_id = appConfig.role_type.casual_user.id;
        this.registerUserData.referral_code = this.generateRefCode();
        console.log(this.registerUserData);
         //Are you sure you want to save this record?
         const alert = await this.alertCtrl.create({
           cssClass: 'my-alert',
           header: 'Zappy',
           message: 'Are you sure you want to save this record?',
           buttons: [
             {
               text: 'Yes',
               handler: () => {
                 //send data to backend
                 let data = this.mobile_no;
                 this.userService.registerNewUser(this.registerUserData).subscribe(async(resp)=>{
                   console.log(resp);
                   if (resp.status == appConfig.statusCode.conflict){
                    const alert = await this.alertCtrl.create({
                      cssClass: 'my-alert',
                      header: 'Zappy',
                      message: resp.message,
                      buttons: [
                        {
                          text: 'Login',
                          role: 'yes',
                          cssClass: 'secondary',
                          handler: () => {
                            this.router.navigate(['/login'])
                          }
                        }, {
                          text: 'Cancel',
                          handler: () => {}
                        }
                      ]
                    });
                
                    await alert.present();
                  } 
                  else if (resp.status == appConfig.statusCode.created) {
                     const alert = await this.alertCtrl.create({
                       cssClass: 'my-alert',
                       header: 'Zappy',
                       message: resp.message,
                       buttons: [
                         {
                           text: 'Proceed to Dashboard',
                           role: 'yes',
                           cssClass: 'primary',
                           handler: () => {
                             
                             //set the ffg into local storage user_id, mobile_no, first_name, last_name, access_token, role_id
                               this.userRespData.user_id = resp.data.id;
                               this.userRespData.mobile_no = resp.data.mobile_no;
                               this.userRespData.first_name = resp.data.first_name;
                               this.userRespData.last_name = resp.data.last_name;
                               this.userRespData.role_id = resp.data.role_id;
                               this.userRespData.access_token = resp.data.access_token;
                           
                               localStorage.setItem(`setting:user_id`,this.userRespData.user_id);
                               localStorage.setItem(`setting:first_name`,this.userRespData.first_name);
                               localStorage.setItem(`setting:last_name`,this.userRespData.last_name);
                               localStorage.setItem(`setting:mobile_no`,this.userRespData.mobile_no);
                               localStorage.setItem(`setting:email`,this.userRespData.email);
                               localStorage.setItem('setting:role_id',this.userRespData.role_id);
                               localStorage.setItem('setting:access_token',this.userRespData.access_token);
                               localStorage.setItem('setting:wallet_amount',this.userRespData.wallet_amount);
                               localStorage.setItem('setting:points',this.userRespData.points);
                               localStorage.setItem(`setting:dob`,resp.data.dob);
                               localStorage.setItem(`setting:security_question`,resp.data.security_question);
                               localStorage.setItem(`setting:sq_answer`,resp.data.security_answer);
                               localStorage.setItem(`setting:nickname`,resp.data.nickname);
                               localStorage.setItem(`setting:gender`,resp.data.gender);
                               localStorage.setItem(`setting:address`,resp.data.address);
                               localStorage.setItem(`setting:referral_code`,resp.data.referral_code);
                               //route to user-dashboard
                               this.router.navigate(['/user-dashboard'])
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
  get signUpFormCtrl() {
    return this.signUpForm.controls;
  }
  
  generateRefCode() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";  
    for (var i = 0; i < 6; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }
}
