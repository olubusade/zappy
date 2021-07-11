import { UserService } from 'src/app/services/user.service';
import { AlertController, LoadingController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { appConfig } from 'src/app/core/config/config';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-user-upgrade',
  templateUrl: './user-upgrade.page.html',
  styleUrls: ['./user-upgrade.page.scss', '../../../assets/css/main.scss'],
})
export class UserUpgradePage implements OnInit {

    role_id:any;
    new_role_id:any;
    user_id:any;
    mobile_no:any;
    wallet_amount:any;
    wallet_bal:any;
    upgrade_to_agent_fee:any = 20000;
    casualUser:any = appConfig.roles.casual_user;
    paypointAgent:any = appConfig.roles.paypoint_agent;
    customReseller:any = appConfig.roles.custom_reseller;
  
   
  constructor(private alertCtrl: AlertController,
              private loadingCtrl: LoadingController,
              private userService: UserService,
              private route: ActivatedRoute,
              private router:Router) { }

  ngOnInit() {
    this.doRefresh(event);
    this.user_id = parseInt(localStorage.getItem('setting:user_id'));
    this.role_id = parseInt(localStorage.getItem('setting:role_id'));
    this.wallet_amount = localStorage.getItem('setting:wallet_amount');
  }

  async upgrade(){
   
    console.log('WALLET AMOUNT:',this.wallet_amount);
    console.log('upgrade_to_agent_fee:',this.upgrade_to_agent_fee);
    if (this.role_id == appConfig.roles.casual_user && this.wallet_amount < this.upgrade_to_agent_fee){
      const alert = await this.alertCtrl.create({
        cssClass: 'my-alert',
        header: 'Zappy',
        subHeader: '',
        mode:'ios',
        animated:true,
        message: `Oops! You can't proceed with upgrade due to insufficient wallet balance`,
        buttons: [
          {
            text: 'Add Fund',
            role: 'yes',
            cssClass: 'secondary',
            handler: () => {
              this.router.navigate(['user-dashboard/home/add-money'])
            }
          }, {
            text: 'Cancel',
            handler: () => {}
          }
        ]
      });
      await alert.present();  
    }
    else if (this.role_id == appConfig.roles.paypoint_agent){
      const alert = await this.alertCtrl.create({
        cssClass: 'my-alert',
        header: 'Zappy',
        subHeader: '',
        mode:'ios',
        animated:true,
        message: `Please <a style="text-decoration:none;" href="mailto:${appConfig.email.abuse_email}">contact us</a> for details`
        
      });
      await alert.present();  
    }
    else{
      this.wallet_bal = this.wallet_amount - this.upgrade_to_agent_fee;
      if(this.role_id == appConfig.roles.casual_user || this.role_id == appConfig.roles.paypoint_agent){
          this.new_role_id = this.role_id + 1;
      }
      const loading = await this.loadingCtrl.create({
        cssClass: 'loading',
        message: '',
        duration: 300,
        animated: true,
        spinner: 'bubbles'
      });
      await loading.present();
      this.userService.upgradeUser({user_id:this.user_id,new_role_id:this.new_role_id,wallet_bal:this.wallet_bal}).subscribe(async(resp)=>{
          
        await loading.dismiss();
        if(!resp){
          const alert = await this.alertCtrl.create({
            cssClass: 'my-alert',
            header: 'Zappy',
            subHeader: '',
            mode:'ios',
            animated:true,
            message: 'Oops! Something is wrong',
            buttons: ['Ok']
          });
          await alert.present(); 
        }
        else if (resp.status == appConfig.statusCode.ok) {
          localStorage.setItem('setting:role_id',this.new_role_id);
          localStorage.setItem('setting:wallet_amount',this.wallet_bal);
          await loading.dismiss();
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
          this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        }else if (resp.status == appConfig.statusCode.conflict) {
          await loading.dismiss();
          appConfig.roles.custom_reseller
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

  doRefresh(event) {
    this.role_id = localStorage.getItem(`setting:role_id`);
    setTimeout(() => {
      event.target.complete();
    }, 1000);
  }

}
