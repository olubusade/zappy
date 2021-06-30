import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, retry } from 'rxjs/internal/operators';
import { appConfig } from '../core/config/config'

@Injectable({
  providedIn: 'root',
})
// 
export class OtpService {
  constructor(private http: HttpClient) {}

  otpVerifyMobileNo(mobile_no: any, otp: any): Observable<any> { 
    let data = {mobile_no, otp};
    return this.http.post(appConfig.apiURL + '/otp_verify_mobile_no', data)
  }

  verifyOtp(mobile: any, otp: any): Observable<any> { 
    let data = {mobile, otp};
    return this.http.post(appConfig.apiURL + '/verify_otp', data)
  }
  sendPasswordResetOtp(email: any, otp: any): Observable<any> { 
    let data = {email, otp};
    return this.http.post(appConfig.apiURL + '/send_password_reset_otp', data)
  }
  verifyPasswordResetOtp(email: any, otp: any): Observable<any> { 
    let data = {email, otp};
    return this.http.post(appConfig.apiURL + '/verify_password_reset_otp', data)
  }
/*
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(message);
  }
  */
}
