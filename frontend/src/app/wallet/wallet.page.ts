import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss', '../../assets/css/main.scss'],
})
export class WalletPage implements OnInit {

  userData = {
    first_name:'',
    last_name:'',
    wallet_amount:'',
    points: ''
  }

  constructor(private router: Router) { }

  ngOnInit() {
    this.userData.first_name = localStorage.getItem(`setting:first_name`);
    this.userData.wallet_amount = localStorage.getItem(`setting:wallet_amount`);
    this.userData.points = localStorage.getItem(`setting:points`);
    if (!this.userData.first_name || !localStorage.getItem(`setting:user_id`)) {
        this.router.navigate(['/logout'])
    }
  }

  segmentChanged(ev: any) {
    const page = ev.detail.value
    if(page === 'wallet') {
      this.router.navigate(['/user-dashboard/wallet'])
    } 
    else {
      this.router.navigate(['/user-dashboard/wallet/'+page])
    }
  }

  navigatePage(data) {
    this.router.navigate(['/user-dashboard/wallet/'+data])
  }

  doRefresh(event) {
    this.userData.wallet_amount = localStorage.getItem(`setting:wallet_amount`);
    setTimeout(() => {
      event.target.complete();
    }, 1000);
  }
}
