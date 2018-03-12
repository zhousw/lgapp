import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ModalController} from 'ionic-angular';

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
    private modalCtrl:ModalController
  ) {
  }

  hireLock(){
        this.modalCtrl.create('PayOfLockPage',{
          title:'租用锁',
          price:'25'
      },{
        cssClass:'disabledfeature'
      }).present();
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

}
