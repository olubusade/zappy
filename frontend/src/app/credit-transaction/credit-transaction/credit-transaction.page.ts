import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-credit-transaction',
  templateUrl: './credit-transaction.page.html',
  styleUrls: ['./credit-transaction.page.scss','../../../assets/css/main.scss'],
})
export class CreditTransactionPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  segmentChanged(ev: any) {
    const page = ev.detail.value
    if(page === 'all') {
      this.router.navigate(['/user-dashboard/transactions'])
    } 
    else {
      this.router.navigate(['/user-dashboard/transactions/'+page])
    }
  }
  
  navigatePage(data) {
    this.router.navigate(['/user-dashboard/transactions/'+data])
  }
}
