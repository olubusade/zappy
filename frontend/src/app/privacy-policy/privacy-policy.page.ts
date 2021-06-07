import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationServiceService } from '../services/navigation-service.service';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.page.html',
  styleUrls: ['./privacy-policy.page.scss','../../assets/css/main.scss'],
})
export class PrivacyPolicyPage implements OnInit {

  constructor( private router: Router,private navService: NavigationServiceService) { }
  
  goBack() {
    this.navService.navigateToPreviousPage();
  }

  ngOnInit() {
  }

}
