import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newlogin',
  templateUrl: './newlogin.page.html',
  styleUrls: ['./newlogin.page.scss', '../../../assets/css/main.scss'],
})
export class NewloginPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(data) {
    if(data === 'login') {
      this.router.navigate(['/user-dashboard2'])
    }
    else {
      this.router.navigate(['/register'])
    }
  }

  signup() {
    this.router.navigate(['/register'])
  }

}
