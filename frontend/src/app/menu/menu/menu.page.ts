import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss', '../../../assets/css/main.scss'],
})
export class MenuPage implements OnInit {

  activePath = '';

  pages = [
    {
      name: 'Referral',
      path: '/menu/referral'
    },
    {
      name: 'Contact',
      path: '/menu/contact'
    },
    {
      name: 'About',
      path: '/menu/about'
    },
    {
      name: 'Logout',
      path: '/menu/logout'
    }
  ]

  constructor(private router: Router) { 
    this.router.events.subscribe((event: RouterEvent) => {
      this.activePath = event.url
    })
  }

  ngOnInit() {
  }

}
