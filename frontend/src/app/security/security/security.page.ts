import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-security',
  templateUrl: './security.page.html',
  //styleUrls: ['./security.page.scss', '../../assets/css/main.scss'],
  styleUrls: ['./security.page.scss'],
})
export class SecurityPage implements OnInit {

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
    this.router.navigate(['/user-dashboard/profile/security/'+data])
  }
}
