import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationServiceService } from '../services/navigation-service.service';


@Component({
  selector: 'app-transfer-success',
  templateUrl: './transfer-success.page.html',
  styleUrls: ['./transfer-success.page.scss','../../assets/css/main.scss'],
})
export class TransferSuccessPage implements OnInit {

  constructor( private router: Router,private navService: NavigationServiceService) { }
  goBack() {
    this.navService.navigateToPreviousPage();
  }
  ngOnInit() {
  }
  goToService(data) {
    this.router.navigate(['/user-dashboard/home/'])
  }
}
