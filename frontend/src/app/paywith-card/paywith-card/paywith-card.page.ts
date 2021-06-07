import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationServiceService } from '../../services/navigation-service.service';


@Component({
  selector: 'app-paywith-card',
  templateUrl: './paywith-card.page.html',
  //styleUrls: ['./paywith-card.page.scss', '../../assets/css/main.scss'],
  styleUrls: ['./paywith-card.page.scss'],
})

export class PaywithCardPage implements OnInit {

  constructor( private router: Router,private navService: NavigationServiceService) { }
  
  goBack() {
    this.navService.navigateToPreviousPage();
  }

  ngOnInit() {
  } 

}
