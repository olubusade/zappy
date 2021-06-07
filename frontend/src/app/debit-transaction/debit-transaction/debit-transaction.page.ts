import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-debit-transaction',
  templateUrl: './debit-transaction.page.html',
  styleUrls: ['./debit-transaction.page.scss','../../../assets/css/main.scss'],
})
export class DebitTransactionPage implements OnInit {

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
