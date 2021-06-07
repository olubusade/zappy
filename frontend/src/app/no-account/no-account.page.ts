import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationServiceService } from '../services/navigation-service.service';

@Component({
  selector: 'app-no-account',
  templateUrl: './no-account.page.html',
  styleUrls: ['./no-account.page.scss','../../assets/css/main.scss'],
})
export class NoAccountPage implements OnInit {

  constructor( private router: Router,private navService: NavigationServiceService) { }
  
  goBack() {
    this.navService.navigateToPreviousPage();
  }
  
  ngOnInit() {
  }
  signup() {
    this.router.navigate(['/signup'])
  }
}
