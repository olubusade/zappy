import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-user-dashboard2',
  templateUrl: './user-dashboard2.page.html',
  styleUrls: ['./user-dashboard2.page.scss'],
})
export class UserDashboard2Page implements OnInit {

  constructor(private router: Router, private menu: MenuController ) { }

  openMenu() {
    console.log('enu')
    this.menu.enable(true, 'second');
    this.menu.open('second');
  }

  ngOnInit() {
  }

}
