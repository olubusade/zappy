import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-upgrade',
  templateUrl: './user-upgrade.page.html',
  styleUrls: ['./user-upgrade.page.scss', '../../../assets/css/main.scss'],
})
export class UserUpgradePage implements OnInit {

  
  role_id:any;
  
  constructor() { }

  ngOnInit() {
    this.doRefresh(event);
    this.role_id = localStorage.getItem('setting:role_id');
  }

  upgrade(){
    
  }

  doRefresh(event) {
    this.role_id = localStorage.getItem(`setting:role_id`);
    setTimeout(() => {
      event.target.complete();
    }, 1000);
  }

}
