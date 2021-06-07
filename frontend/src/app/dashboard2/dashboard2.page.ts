import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.page.html',
  styleUrls: ['./dashboard2.page.scss','../../assets/css/main.scss'],
})
export class Dashboard2Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { 
  }

  slideOpts = {
    slidesPerView: 1.2,
    spaceBetween: 16,
  }

  buyData() { 
    this.router.navigate(['/data-bundle'])
  }
  gotoService(data:string) {
   // console.log(data)
     this.router.navigate(['user-dashboard2/home/'+data])
  }
 
}
