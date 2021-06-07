import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NavigationServiceService } from '../../services/navigation-service.service';

@Component({
  selector: 'app-cable-tv',
  templateUrl: './cable-tv.page.html',
  styleUrls: ['./cable-tv.page.scss','../../../assets/css/main.scss'],
})
export class CableTvPage implements OnInit {
 
  constructor( private router: Router,private navService: NavigationServiceService) { }

  ngOnInit() {
  }

  subscribeToService() {
    this.router.navigate(['/user-dashboard/wallet/confirm-payment/'])
  }
  goBack() {
    this.navService.navigateToPreviousPage();
  }
}
