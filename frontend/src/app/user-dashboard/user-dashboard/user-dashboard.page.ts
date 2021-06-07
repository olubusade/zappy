import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterEvent } from '@angular/router';
import { MenuController } from '@ionic/angular';
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
              private storage: Storage ) { }

  openMenu() {
    console.log('enu')
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

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


  
}
