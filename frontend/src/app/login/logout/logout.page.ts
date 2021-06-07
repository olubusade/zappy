import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

   constructor(private router: Router, private loadingCtrl: LoadingController) { 
    
    localStorage.clear();
    this.router.navigate(['/login'])
  }

 async ngOnInit() {
    const loading = await this.loadingCtrl.create({
      cssClass: 'loading',
      message: '',
      duration: 100,
      animated: true,
      spinner: 'bubbles'
    });
    await loading.present();
  }

}
