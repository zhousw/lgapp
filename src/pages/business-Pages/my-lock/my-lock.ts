import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { ComponentUtil } from "../../../utils/ComponentUtil";

@IonicPage()
@Component({
  selector: 'page-my-lock',
  templateUrl: 'my-lock.html',
  providers:[
    ComponentUtil
  ]
})
export class MyLockPage {

  title = '我的锁';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private componentUtil:ComponentUtil,
    private ModalCtrl:ModalController
  ) {
  }

  chooseLock(){
    this.componentUtil.PaySheet();
  }

  addLock(){
    this.ModalCtrl.create('AddOfLockPage').present()
  }

}
