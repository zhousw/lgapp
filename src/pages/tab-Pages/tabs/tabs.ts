import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

import { CommonUtil } from "../../../utils/commonUtil";

@IonicPage()
@Component({
  templateUrl: 'tabs.html',
  providers:[
    CommonUtil
  ]
})
export class TabsPage {

  Home = 'HomePage';
  container = 'ContainerPage';
  myLock = 'LockPage';
  personalCenter = 'PersonalCenterPage'
    
  constructor(
    private navCtrl:NavController,
    private commonUtil:CommonUtil
  ) {
    if(commonUtil.isNull( window.localStorage.getItem("isLogin"))){
       // this.navCtrl.setRoot('LoginPage');
    }
    
  }

}
