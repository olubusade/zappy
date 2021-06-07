import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wallet-blank',
  templateUrl: './wallet-blank.page.html',
  styleUrls: ['./wallet-blank.page.scss', '../../assets/css/main.scss'],
})
export class WalletBlankPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
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
}
