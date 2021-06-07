import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationServiceService } from '../../services/navigation-service.service';

@Component({
  selector: 'app-electricity',
  templateUrl: './electricity.page.html',
  styleUrls: ['./electricity.page.scss', '../../../assets/css/main.scss'],
})
export class ElectricityPage implements OnInit {

  constructor( private router: Router,private navService: NavigationServiceService) { }
  
  goBack() {
    this.navService.navigateToPreviousPage();
  }
  ngOnInit() {
  }

  subscribeToService() {
    this.router.navigate(['/user-dashboard/wallet/confirm-payment/'])
  }
   powerproviders = [
     {
       id: 1,
      name: 'EKDC',
      value: 'ekdc',      
     },
     {
       id: 2,
      name: 'IKDC',
      value: 'ikdc',      
     },
     { 
       id: 3,
      name: 'IBDC',
      value: 'ibdc',      
     }
   ]
    isSelected = false;
   onChnage() {
     this.isSelected = true;
   }
   updateColor(color) {
    document.documentElement.style.setProperty(`--ion-background-color`, color);
  }
}
 