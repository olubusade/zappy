import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.page.html',
  //styleUrls: ['./transactions.page.scss','../../assets/css/main.scss'],
  styleUrls: ['./transactions.page.scss'],
})

export class TransactionsPage implements OnInit {

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
