import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationServiceService } from '../services/navigation-service.service';

@Component({
  selector: 'app-fund-transfer',
  templateUrl: './fund-transfer.page.html',
  styleUrls: ['./fund-transfer.page.scss','../../assets/css/main.scss'],
})
export class FundTransferPage implements OnInit {

  slideOpts = {
    slidesPerView: 4,
  };

  constructor( private router: Router,private navService: NavigationServiceService) { }
  goBack() {
    this.navService.navigateToPreviousPage();
  }

  ngOnInit() {
  }


  goToService(data) {
    if(data === 'transfer2') {
      this.router.navigate(['/user-dashboard/dashboard2/'+data])
    }
    else {
      this.router.navigate(['/user-dashboard/wallet/'+data])
    }

  }

}
