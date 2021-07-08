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

  otpValidateMobileNo(mobile_no: any, otp: any): Observable<any> { 
    let data = {mobile_no, otp};
    return this.http.post(appConfig.apiURL + '/otp_validate_mobile', data)
  }
  otpValidateEmail(mobile_no:any, email: any, otp: any): Observable<any> { 
    let data = {mobile_no, email, otp};
    return this.http.post(appConfig.apiURL + '/otp_validate_email', data)
  }

  verifyMobileNoOtp(mobile: any, otp: any): Observable<any> { 
    let data = {mobile, otp};
    return this.http.post(appConfig.apiURL + '/verify_mobile_otp', data)
  }
  verifyEmailOtp(email:any, otp: any): Observable<any> { 
    let data = {email, otp};
    return this.http.post(appConfig.apiURL + '/verify_email_otp', data)
  }
  sendPasswordResetOtp(email: any, otp: any): Observable<any> { 
    let data = {email, otp};
    return this.http.post(appConfig.apiURL + '/send_password_reset_otp', data)
  }
  verifyPasswordResetOtp(email: any, otp: any): Observable<any> { 
    let data = {email, otp};
    return this.http.post(appConfig.apiURL + '/verify_password_reset_otp', data)
  }

}
