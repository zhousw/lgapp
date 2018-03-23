import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { ComponentUtil } from "../../../utils/ComponentUtil";

@IonicPage()
@Component({
  selector: 'page-personal-center',
  templateUrl: 'personal-center.html',
  providers:[
    ComponentUtil
  ]
})
export class PersonalCenterPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private alertCtrl:AlertController,
    private componentUtil:ComponentUtil
  ) {
  }

  moneyRecordSearch(){
    this.navCtrl.push('EarnestMoneyPage');
  }

  accountRecordSearch(){
    this.navCtrl.push('AccountRecordPage');
  }

  earnest_Recharge(){
    this.alertCtrl.create({
      title:'保证金充值',
      subTitle:'当前保证金余额为0元',
      inputs:[
        {
          type: 'radio',
          label: '600元(单把锁)',
          value: 'single',
          checked: true
        },
        {
          type: 'radio',
          label: '1200元(两把锁)',
          value: 'double'
        }
      ],
      buttons:[
        {
          text: '取消',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: '确定',
          handler: data => {
            this.componentUtil.PaySheet();
          }
        }
      ]
    }).present()
  }

  account_Recharge(){
    this.alertCtrl.create({
      title:'余额充值',
      inputs:[
        {
          type: 'text',
          placeholder:'充值金额'
        }
      ],
      buttons:[
        {
          text: '确认去支付',
          handler: data => {
            this.componentUtil.wechatPaySheet();
          }
        }
      ]
    }).present();
  }

  carInfo(){
    this.navCtrl.push("CarInfoPage");
  }

  personalSettings(){
    this.navCtrl.push('PersonalSettingsPage');
  }

  systemSettings(){
    this.navCtrl.push('SystemSettingsPage');
  }

  aboutUs(){
    this.navCtrl.push('AboutUsPage');
  }

}
