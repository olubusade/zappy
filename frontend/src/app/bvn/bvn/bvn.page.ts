import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationServiceService } from '../../services/navigation-service.service';

@Component({
  selector: 'app-bvn',
  templateUrl: './bvn.page.html',
  styleUrls: ['./bvn.page.scss', '../../../assets/css/main.scss'],
})
export class BvnPage implements OnInit {

  constructor( private router: Router,private navService: NavigationServiceService) { }
  
  goBack() {
    this.navService.navigateToPreviousPage();
  }
  
  ngOnInit() {
  }

}
