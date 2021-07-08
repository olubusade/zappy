import { async } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterEvent } from '@angular/router';
import { MenuController, ActionSheetController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.page.html',
  styleUrls: ['../../../assets/css/main.scss'],
})
export class UserDashboardPage implements OnInit {
  userData:any = {
    user_id:'',
    first_name:'',
    last_name: '',
    mobile_no:'',
    role_id:'',
    access_token:'',
    expiresIn:''
  }

  constructor(private router: Router,
              private route: ActivatedRoute,
              private menu: MenuController,
              private storage: Storage,
              private actionSheetCtrl: ActionSheetController ) { }

  
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userData.user_id = params['a'];
      this.userData.mobile_no = params['b'];
      this.userData.first_name = params['c'];
      this.userData.last_name = params['d']; 
     let first_name = localStorage.getItem(`setting:first_name`);
     let last_name = localStorage.getItem(`setting:last_name`);
     console.log('LOCAL:'+first_name+' '+last_name);
    });
  }
  async openMoreMenu () {
    /*
    console.log('enu')
    this.menu.enable(true, 'first');
    this.menu.open('first');
    */
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'More menu',
      animated: true,
      cssClass: 'my-alert',
      buttons: [
        {
          text: 'Referral',
          icon: 'share-social-outline',
          handler: () => {
           
            this.router.navigate(['/menu/referral'])
          }
        }, 
        {
          text: 'Logout',
          icon: 'log-out',
          handler: () => {
            this.router.navigate(['/logout'])
          }
        }, 
        {
          icon: 'close',
          role: 'cancel',
          handler: () => {}
        }
      ]
    });
    await actionSheet.present();
  }


  
}
