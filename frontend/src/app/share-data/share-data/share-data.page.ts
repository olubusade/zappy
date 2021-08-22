import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationServiceService } from '../../services/navigation-service.service';

@Component({
  selector: 'app-share-data',
  templateUrl: './share-data.page.html',
  styleUrls: ['./share-data.page.scss'],
})
export class ShareDataPage implements OnInit {

  constructor(private router: Router,private navService: NavigationServiceService) { }
  goBack() {
    this.navService.navigateToPreviousPage();
  }
  ngOnInit() {
  }
  subscribeToService() {
    this.router.navigate(['/user-dashboard/wallet/confirm-payment/'])
  }
}
