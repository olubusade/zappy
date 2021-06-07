import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationServiceService } from '../../services/navigation-service.service';

@Component({
  selector: 'app-delete-card',
  templateUrl: './delete-card.page.html',
  styleUrls: ['./delete-card.page.scss','../../../assets/css/main.scss'],
})
export class DeleteCardPage implements OnInit {

  constructor( private router: Router,private navService: NavigationServiceService) { }
  
  goBack() {
    this.navService.navigateToPreviousPage();
  }
   
  ngOnInit() {
  }

  slideOpts = {
    slidesPerView: 1,
    spaceBetween: -50 
  }
  
  navigatePage(data) {
    console.log(data)
    this.router.navigate(['/user-dashboard/wallet/'+data])
  }
}
