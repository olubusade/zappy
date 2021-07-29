import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from  './auth/auth.module';
import { GlobalErrorHandler } from './core/utils/GlobalErrorHandler';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './../app/core/utils/TokenInterceptor';
import { IonicStorageModule } from '@ionic/storage-angular';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { Contact } from '@ionic-native/contacts';
import { OtpPageModule } from './otp/otp.module';

@NgModule({
  declarations: [AppComponent, ],
  entryComponents: [],
  imports: [BrowserModule, 
            HttpClientModule, 
            IonicModule.forRoot(), 
            AppRoutingModule, 
            AuthModule,
            IonicStorageModule.forRoot(),
            OtpPageModule
          ],
  providers: [
    StatusBar,
    SplashScreen,
    Clipboard,
    FingerprintAIO,
    Contact,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GlobalErrorHandler,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
