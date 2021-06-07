import { Component, OnInit } from '@angular/core';
import { NavigationServiceService } from '../services/navigation-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-next-of-kin',
  templateUrl: './next-of-kin.page.html',
  styleUrls: ['./next-of-kin.page.scss', '../../assets/css/main.scss'],
})
export class NextOfKinPage implements OnInit {


  ngOnInit() {
  }
  constructor( private router: Router,private navService: NavigationServiceService) { }
  
  goBack() {
    this.navService.navigateToPreviousPage();
  }
}
