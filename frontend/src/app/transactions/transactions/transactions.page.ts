import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationServiceService } from '../../services/navigation-service.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.page.html',
  //styleUrls: ['./transactions.page.scss','../../assets/css/main.scss'],
  styleUrls: ['./transactions.page.scss'],
})

export class TransactionsPage implements OnInit {
  transactionHistory = [
    {
      month: '---',
      year: 0,
      transactions: [
        {
          title: "---",
          desc: "---",
          amount: 0,
          date: "---",
          ref: "---"
        }
      ]
    }
  ]

  historyId = 0;
  monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  transactionYears = [];
  month = null;
  year = null;
  userId = null;
  currentYear = null;

  noHistory = true;

  constructor( private router: Router, private navService: NavigationServiceService, private userService : UserService,) { }

  ngOnInit() {
    const d = new Date();
    this.month = this.monthNames[d.getMonth()];
    this.currentYear = d.getFullYear();
    this.year = d.getFullYear();
    this.userId = parseInt(localStorage.getItem(`setting:user_id`));

    for(let i = 2021; i <= this.currentYear; i++){
      this.transactionYears.push(i);
    }
    //console.log(currentMonth +' : '+currentYear)
    this.fetchTransactionHistory({month: this.month, year: this.year, userId: this.userId});
  }

  goBack() {
    this.navService.navigateToPreviousPage();
  }

  flipTransaction(direction: string){
    direction == "next" ? ++this.historyId : --this.historyId;
  }

  fetchTransactionHistory(data){
    this.userService.getTransactionHistory(data).subscribe(resp => {
      console.log(resp);
      if(resp.data.length > 0){
        this.transactionHistory = resp.data;
        this.noHistory = false;
      }else{
        this.noHistory = true;
      }

      console.log(this.noHistory);
    });
  }

  fetchTrans(){
    console.log(this.month + ' : ' + this.year + ' : ' + this.userId);
    this.fetchTransactionHistory({month: this.month, year: this.year, userId: this.userId});
  }

  subscribeToService() {
    this.router.navigate(['/user-dashboard/wallet/confirm-payment/'])
  }
  
}
