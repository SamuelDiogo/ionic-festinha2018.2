import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { Camera } from '@ionic-native/camera/ngx';

//firebase--------------------------------
import {AngularFireAuthModule, AngularFireAuth}from '@angular/fire/auth';
//[conecxão]
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';

import {AngularFireDatabaseModule} from '@angular/fire/database';
import { FormsModule } from '@angular/forms';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,AngularFireModule.initializeApp(environment.firebaseConfig),AngularFireDatabaseModule,AngularFireAuthModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    FormsModule, Camera, Geolocation
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
