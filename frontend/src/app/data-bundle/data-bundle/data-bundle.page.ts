import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationServiceService } from '../../services/navigation-service.service';

@Component({
  selector: 'app-data-bundle',
  templateUrl: './data-bundle.page.html',
  styleUrls: ['./data-bundle.page.scss', '../../../assets/css/main.scss'],
})
export class DataBundlePage implements OnInit {

  constructor( private router: Router,private navService: NavigationServiceService) { }
  goBack() {
    this.navService.navigateToPreviousPage();
  }
  ngOnInit() {
  }
  subscribeToService() {
    this.router.navigate(['/user-dashboard/wallet/confirm-payment/'])
  }
}
