import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { NavigationServiceService } from '../../services/navigation-service.service';
import { AlertController, NavController, LoadingController } from '@ionic/angular';
import { appConfig } from 'src/app/core/config/config';

@Component({
  selector: 'app-recurrent-services',
  templateUrl: './recurrent-services.page.html',
  styleUrls: ['./recurrent-services.page.scss']
})
export class RecurrentServicesPage implements OnInit {

  constructor( private router: Router,
    private route: ActivatedRoute, 
    private navService: NavigationServiceService, 
    private userService : UserService,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,) { }
  
  ngOnInit() {
    
  }
  
  setRecurrent(service){
    this.router.navigate(['/user-dashboard/home/recurrent-mobile'], {queryParams: {type: service}})
  }

  goBack() {
  // console.log(data)
  this.router.navigate(['/user-dashboard/home'])
  }
  
}
