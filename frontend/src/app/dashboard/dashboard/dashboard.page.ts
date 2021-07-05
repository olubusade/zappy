import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss', '../../../assets/css/main.scss'],
  // styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  slideOpts = {
    slidesPerView: 1.2,
    spaceBetween: 16,
  }
  userData = {
    first_name:'',
    last_name:'',
    wallet_amount:'',
    points: ''
  }

  constructor(private router: Router) { }
  
  ngOnInit() {
    console.log(localStorage.getItem(`setting:first_name`));
    this.userData.first_name = localStorage.getItem(`setting:first_name`);
    this.userData.wallet_amount = localStorage.getItem(`setting:wallet_amount`);
    this.userData.points = localStorage.getItem(`setting:points`);
    if (!this.userData.first_name || !localStorage.getItem(`setting:user_id`)) {
        this.router.navigate(['/logout'])
    }
    console.log(this.userData.wallet_amount);
  }

  buyData() {
    this.router.navigate(['/data-bundle'])
  }
  
  gotoService(data:string) {
   // console.log(data)
     this.router.navigate(['user-dashboard/home/'+data])
  }

}
