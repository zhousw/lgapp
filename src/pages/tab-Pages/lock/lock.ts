import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController,AlertController} from 'ionic-angular';
import { ComponentUtil } from "../../../utils/ComponentUtil";
import { ZBar, ZBarOptions } from '@ionic-native/zbar';

@IonicPage()
@Component({
  selector: 'page-lock',
  templateUrl: 'lock.html',
  providers:[
    ComponentUtil,
    ZBar
  ]
})
export class LockPage {

  title = '我的锁';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private modalCtrl : ModalController,
    private alertCtrl:AlertController,
    private componentUtil:ComponentUtil,
    private zbar: ZBar
  ) {
  }

  hireLock(){
    this.modalCtrl.create('PayOfLockPage').present();
  }

  myLock(){
    this.navCtrl.push('MyLockPage');
  }

  moneyRecordSearch(){
    this.navCtrl.push('EarnestMoneyPage');
  }

  accountRecordSearch(){
    this.navCtrl.push('AccountRecordPage');
  }

  lockRecord(){
    this.navCtrl.push('LockRecordPage');
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
