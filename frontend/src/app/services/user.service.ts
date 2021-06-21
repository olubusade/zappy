import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, retry } from 'rxjs/internal/operators';
import { appConfig } from '../core/config/config'
import { Plugins } from "@capacitor/core";
const { Device } = Plugins;

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  registerNewUser(userData: any): Observable<any> {
    let data = {userData};
    return this.http.post(appConfig.apiURL + '/register_new_user', data)
  }

  loginUser(userData: any): Observable<any> {
    let data = {userData};
    return this.http.post(appConfig.apiURL + '/login', data)
  }

  updateUserProfile(userData: any): Observable<any> {
    let data = {userData};
    console.log(data);
    return this.http.post(appConfig.apiURL + '/update_user_profile', data)
  }
  
  storePaymentDetails(paymentData: any): Observable<any> {
    //let data = {paymentData};
    return this.http.post(appConfig.apiURL + '/finish_wallet_payment', paymentData)
  }
}
