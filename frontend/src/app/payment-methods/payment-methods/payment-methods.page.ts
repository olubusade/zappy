import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationServiceService } from '../../services/navigation-service.service';


@Component({
  selector: 'app-payment-methods',
  templateUrl: './payment-methods.page.html',
 // styleUrls: ['./payment-methods.page.scss','../../assets/css/main.scss'],
  styleUrls: ['./payment-methods.page.scss']
})

export class PaymentMethodsPage implements OnInit {

  constructor( private router: Router,private navService: NavigationServiceService) { }
  
  goBack() {
    this.navService.navigateToPreviousPage();
  }
  

  ngOnInit() {
  }

}
