import { Injectable } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  public getToken(){
    return localStorage.getItem(`setting:access_token`);
  }
  public tokenExpired() {
    console.log('testing token');
    const token = parseInt(localStorage.getItem(`setting:expiresIn`));
   // const expiry = (JSON.parse(atob(token.split('.')[1]))).expiresIn;
    return ((Math.floor((new Date).getTime() / 1000)) >= token) ? console.log('Valid Token') : this.router.navigate(['/login']);
  }
}
