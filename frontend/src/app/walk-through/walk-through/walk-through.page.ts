import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-walk-through',
  templateUrl: './walk-through.page.html',
  styleUrls: ['./walk-through.page.scss','../../../assets/css/main.scss'],
})
export class WalkThroughPage implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }

  skip() {
    this.router.navigate(['/home']);
  }

  slideOpts = {
    slidesPerView: 1,
  }

}
