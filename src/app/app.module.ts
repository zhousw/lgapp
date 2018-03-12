import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from "../pages/tabs/tabs";
import { ContainerPage } from "../pages/container/container";
import { LockPage } from "../pages/lock/lock";
import { HomePage } from '../pages/home/home';
import { PersonalCenterPage } from "../pages/personal-center/personal-center";

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    ContainerPage,
    LockPage,
    HomePage,
    PersonalCenterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      backButtonText: '返回',
      iconMode: 'ios'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    ContainerPage,
    LockPage,
    HomePage,
    PersonalCenterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
