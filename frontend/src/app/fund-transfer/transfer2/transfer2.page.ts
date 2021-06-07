import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationServiceService } from '../../services/navigation-service.service';

@Component({
  selector: 'app-transfer2',
  templateUrl: './transfer2.page.html',
  styleUrls: ['./transfer2.page.scss', '../fund-transfer.page.scss','../../../assets/css/main.scss'],
})
export class Transfer2Page implements OnInit {

  constructor( private router: Router,private navService: NavigationServiceService) { }
  goBack() {
    this.navService.navigateToPreviousPage();
  }

  slideOpts = {
    slidesPerView: 4,
  };

  ngOnInit() {
  }
  goToService(data) {
    if(data === 'success') {
      this.router.navigate(['/user-dashboard/transactions/'+data])
    }
    else {
      this.router.navigate(['/user-dashboard/wallet/'+data])
    }

  }

}
