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
  updateUserPassword(userData: any): Observable<any> {
    let data = {userData};
    return this.http.post(appConfig.apiURL + '/update_user_password', data)
  }
  loginUserWithBiometric(userData: any): Observable<any> {
    let data = {userData};
    return this.http.post(appConfig.apiURL + '/login_user_with_biometric', data)
  }

  resetUserPassword(userData: any): Observable<any> {
    let data = {userData};
    return this.http.post(appConfig.apiURL + '/reset_user_password', data)
  }
  
  passwordResetEmail(email: any,otp:any): Observable<any> {
    let data = {email,otp};
    console.log(data);
    return this.http.post(appConfig.apiURL + '/user_password_reset_email', data)
  }

  updateUserProfile(userData: any): Observable<any> {
    let data = {userData};
    console.log(data);
    return this.http.post(appConfig.apiURL + '/update_user_profile', data)
  }
  upgradeUser(userData: any): Observable<any> {
    //let data = {userData};
    console.log(userData);
    return this.http.post(appConfig.apiURL + '/upgrade_user_level', userData)
  }
  
  storePaymentDetails(paymentData: any): Observable<any> {
    //let data = {paymentData};
    return this.http.post(appConfig.apiURL + '/finish_wallet_payment', paymentData)
  }

  verifyTnxPin(data: any): Observable<any> {
    return this.http.post(appConfig.apiURL + '/verify_tnx_pin', data);
  }

  recharge(data: any): Observable<any> {
    return this.http.post(appConfig.apiURL + '/recharge', data);
  }

  getTransactionHistory(data: any): Observable<any> {
    return this.http.post(appConfig.apiURL + '/getTransactionHistory', data);
  }

  refreshWallet(data: any): Observable<any> {
    return this.http.post(appConfig.apiURL + '/refreshWallet', data);
  }

  shareFund(data: any): Observable<any> {
    return this.http.post(appConfig.apiURL + '/shareFund', data);
  }

  createBeneficiaryGroup(data: any): Observable<any> {
    return this.http.post(appConfig.apiURL + '/createBeneficiaryGroup', data);
  }

  fetchGroups(data: any): Observable<any> {
    return this.http.post(appConfig.apiURL + '/fetchBeneficiaryGroups', data);
  }

  addContact(data: any): Observable<any> {
    return this.http.post(appConfig.apiURL + '/addContact', data);
  }
}
