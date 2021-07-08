import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { NavigationServiceService } from '../../services/navigation-service.service';
import { AlertController, NavController, LoadingController } from '@ionic/angular';
import { appConfig } from 'src/app/core/config/config';

@Component({
  selector: 'app-payment-successful',
  templateUrl: './payment-successful.page.html',
 styleUrls: ['./payment-successful.page.scss', '../../../assets/css/action.scss']
})
export class PaymentSuccessfulPage implements OnInit {
  purchaseParams: any = {};
  
  constructor( private router: Router,
    private route: ActivatedRoute, 
    private navService: NavigationServiceService, 
    private userService : UserService,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,) { }
  
  ngOnInit() {
    this.route.queryParams.subscribe(param => {
      console.log(param);
      this.purchaseParams = param;
    });
  }
  
  goHome() {
  // console.log(data)
  this.router.navigate(['/user-dashboard'])
  }
  
}
