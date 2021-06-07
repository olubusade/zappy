import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NavigationServiceService } from '../services/navigation-service.service';


@Component({
  selector: 'app-transfer-instruction1',
  templateUrl: './transfer-instruction1.page.html',
  styleUrls: ['./transfer-instruction1.page.scss','../../assets/css/main.scss'],
})
export class TransferInstruction1Page implements OnInit {

  constructor( private router: Router,private navService: NavigationServiceService) { }

  ngOnInit() {
  }

  acceptTransfer() {
    const elem = document.getElementById('details');
    elem.classList.toggle('hidden')
  }

  goBack() {
    this.navService.navigateToPreviousPage();
  }

}
