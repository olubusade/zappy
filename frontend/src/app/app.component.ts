import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router, RouterEvent } from '@angular/router';
import { from } from 'rxjs';
import { AuthService } from './services/auth.service';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss', '../assets/css/main.scss']
})
export class AppComponent {

  activePath = '';
  userData = {
    first_name: '',
    last_name: '',
    fullname:''
  }

  pages = [
    {
      name: 'Referral',
      icon: 'referal_icon.svg',
      color: 'text-primary',
      path: '/user-dashboard/menu/referral'
    },
    {
      name: 'Contact',
      icon: 'contact_us_icon.svg',
      color: 'text-primary',
      path: '/user-dashboard/menu/contact'
    },
    {
      name: 'About Zappy',
      icon: 'about_rulpay_icon.svg',
      color: 'text-primary',
      path: '/user-dashboard/menu/about'
    },
    {
      name: 'Logout',
      icon: 'logout_icon.svg',
      color: 'text-danger',
      path: '/logout'
    }
  ]

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private authService: AuthService
  ) {
    this.initializeApp();

    this.router.events.subscribe((event: RouterEvent) => {
      this.activePath = event.url
    })
    this.userData.first_name = localStorage.getItem(`setting:first_name`);
    this.userData.last_name = localStorage.getItem(`setting:last_name`);
    
    this.userData.fullname = this.userData.first_name + ' ' + this.userData.last_name;
  }

  profile() {
    console.log('profile')
    this.router.navigate(['/user-dashboard/profile'])
  }

  register() {
    console.log('profile')
    this.router.navigate(['/signup'])
  }
  private tokenExpired(token: string) {
    console.log('token',token);
   // const expiry = parseInt(token);
    const decode:any = jwt_decode(token);
    const expiry = decode.exp;
    console.log('today', Math.floor((new Date).getTime() / 1000));
    console.log('expiry', expiry );
    return (Math.floor((new Date).getTime() / 1000)) >= expiry;
  }
  

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    
    //This is can only be used to validate the user on the app
    //and not to be used to authenticate the api request
     
    /*
    if (this.tokenExpired(localStorage.getItem(`setting:access_token`))) {
      // token expired
      this.router.navigate(['/login'])
      console.log('Token expired');
    } else {
      // token valid
      console.log('Valid Token');
    }
    */
   
  }
}
