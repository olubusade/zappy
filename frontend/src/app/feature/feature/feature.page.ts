import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.page.html',
  styleUrls: ['./feature.page.scss', '../../../assets/css/main.scss'],
})
export class FeaturePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  segmentChanged(ev: any) {
    const page = ev.detail.value
    if(page === 'personal') {
      this.router.navigate(['/user-dashboard/profile'])
    } 
    else {
      this.router.navigate(['/user-dashboard/profile/'+page])
    }
  }
  
  navigatePage(data) {
    if(data === 'change-photo') {
      this.router.navigate(['/user-dashboard/profile/'+data])
    } 
    else {      
      this.router.navigate(['/user-dashboard/profile/features/'+data])
    }
  }
 
  }
