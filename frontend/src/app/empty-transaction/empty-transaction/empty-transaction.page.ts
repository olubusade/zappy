import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empty-transaction',
  templateUrl: './empty-transaction.page.html',
  styleUrls: ['./empty-transaction.page.scss','../../../assets/css/main.scss'],
})
export class EmptyTransactionPage implements OnInit {

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

}
