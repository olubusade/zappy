import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss', '../../../assets/css/main.scss'],
})
export class ProfilePage implements OnInit {

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
    this.router.navigate(['/user-dashboard/profile/'+data])
  }
}
