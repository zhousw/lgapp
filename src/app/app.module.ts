import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from "../pages/tabs/tabs";
import { ContainerPage } from "../pages/container/container";
import { MyLockPage } from "../pages/my-lock/my-lock";
import { HomePage } from '../pages/home/home';
import { PersonalCenterPage } from "../pages/personal-center/personal-center";

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    ContainerPage,
    MyLockPage,
    HomePage,
    PersonalCenterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    ContainerPage,
    MyLockPage,
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
