import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ComponentUtil } from "../../../utils/ComponentUtil";
import { ZBar, ZBarOptions } from '@ionic-native/zbar';

@IonicPage()
@Component({
  selector: 'page-pay-of-lock',
  templateUrl: 'pay-of-lock.html',
  providers:[
    ComponentUtil,
    ZBar
  ]
})
export class PayOfLockPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private componentUtil:ComponentUtil,
    private zbar: ZBar
  ) {
  }

  closeModal(){
    this.navCtrl.pop();
  }

  toPay(){
    this.componentUtil.PaySheet();
  }

  qrScan(){
    let options: ZBarOptions = {
      flash: 'off',
      text_title: '扫码',
      text_instructions: '请将二维码置于中央',
      drawSight: true
    };

    this.zbar.scan(options)
      .then(result => {
        alert("结果：" + result); // Scanned code
      })
      .catch(error => {
        alert(error); // Error message
      });
  }

}
