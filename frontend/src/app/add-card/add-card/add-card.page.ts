import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NavigationServiceService } from '../../services/navigation-service.service';


@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.page.html',
  styleUrls: ['./add-card.page.scss', '../../../assets/css/main.scss'],
})
export class AddCardPage implements OnInit {

  constructor( private router: Router,private navService: NavigationServiceService) { }

  ngOnInit() {
  }

  addCard() {
    this.router.navigate(['/user-dashboard/wallet/cards'])
  }
  goBack() {
    this.navService.navigateToPreviousPage();
  }

  slideOpts = {
    slidesPerView: 1,
    spaceBetween: -45
  }
}

