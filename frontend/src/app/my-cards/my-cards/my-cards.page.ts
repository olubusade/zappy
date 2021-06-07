import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationServiceService } from '../../services/navigation-service.service';



@Component({
  selector: 'app-my-cards',
  templateUrl: './my-cards.page.html',
  //styleUrls: ['./my-cards.page.scss', '../../assets/css/main.scss'],
  styleUrls: ['./my-cards.page.scss']
})
export class MyCardsPage implements OnInit {

  constructor( private router: Router,private navService: NavigationServiceService) { }
  
  goBack() {
    this.navService.navigateToPreviousPage();
  } 
  
  slideOpts = {
    slidesPerView: 1,
    spaceBetween: -35 
  }

  ngOnInit() {
    
  }
  segmentChanged(ev: any) {
    const page = ev.detail.value
    if(page === 'wallet') {
      this.router.navigate(['/user-dashboard/wallet'])
    } 
    else {
      this.router.navigate(['/user-dashboard/wallet/'+page])
    }
  }

  navigatePage(data) {
    console.log(data)
    this.router.navigate(['/user-dashboard/wallet/'+data])
  }
}
