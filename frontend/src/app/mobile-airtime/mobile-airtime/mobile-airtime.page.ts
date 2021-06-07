import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationServiceService } from '../../services/navigation-service.service';

@Component({
  selector: 'app-mobile-airtime',
  templateUrl: './mobile-airtime.page.html', 
 // styleUrls: ['./mobile-airtime.page.scss', '../../assets/css/main.scss'],
 styleUrls: ['./mobile-airtime.page.scss']
})
export class MobileAirtimePage implements OnInit {

  constructor( private router: Router,private navService: NavigationServiceService) { }
  
  goBack() {
    this.navService.navigateToPreviousPage();
  }
  
  ngOnInit() {
}
  subscribeToService() {
    this.router.navigate(['/user-dashboard/wallet/confirm-payment/'])
  }

  isSelected = false;
  onChnage() {
    this.isSelected = true;
  }
}
