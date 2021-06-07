import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NavigationServiceService } from '../../services/navigation-service.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss', '../../../assets/css/main.scss'],
})
export class ChangePasswordPage implements OnInit {

  constructor( private router: Router,private navService: NavigationServiceService) { }

  ngOnInit() {
  }

  gotoService() {
    this.router.navigate(['/user-dashboard/profile/security'])
  }
  goBack() {
    this.navService.navigateToPreviousPage();
  }

}
