import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ContainerPage } from "../container/container";
import { LockPage } from "../lock/lock";
import { HomePage } from '../home/home';
import { PersonalCenterPage } from "../personal-center/personal-center";
import { CommonUtil } from "../../../utils/commonUtil";

@Component({
  templateUrl: 'tabs.html',
  providers:[
    CommonUtil
  ]
})
export class TabsPage {

  Home = HomePage;
  container = ContainerPage;
  myLock = LockPage;
  personalCenter = PersonalCenterPage
    
  constructor(
    private navCtrl:NavController,
    private commonUtil:CommonUtil
  ) {
    if(commonUtil.isNull( window.localStorage.getItem("isLogin"))){
        this.navCtrl.setRoot('LoginPage');
    }
    
  }

}
