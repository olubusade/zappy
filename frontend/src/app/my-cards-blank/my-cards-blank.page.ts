import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-cards-blank',
  templateUrl: './my-cards-blank.page.html',
  styleUrls: ['./my-cards-blank.page.scss','../../assets/css/main.scss'],
})
export class MyCardsBlankPage implements OnInit {

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
