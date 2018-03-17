import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ComponentUtil } from "../../../utils/ComponentUtil";

@IonicPage()
@Component({
  selector: 'page-pay-of-lock',
  templateUrl: 'pay-of-lock.html',
  providers:[
    ComponentUtil
  ]
})
export class PayOfLockPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private componentUtil:ComponentUtil
  ) {
  }

  closeModal(){
    this.navCtrl.pop();
  }

  toPay(){
    this.componentUtil.PaySheet();
  }

}
