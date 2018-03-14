import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController,AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-lock',
  templateUrl: 'lock.html',
})
export class LockPage {

  title = '我的锁';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private modalCtrl : ModalController,
    private alertCtrl:AlertController
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
            console.log('Cancel clicked');
          }
        }
      ]
    }).present()
  }



}
