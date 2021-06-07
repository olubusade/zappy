import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router ) {}

   showLogin() {
    this.router.navigate(['/login']);
  }

  showSignup() {
    this.router.navigate(['/register']);
  }

}
