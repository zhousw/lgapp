import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-lock-record',
  templateUrl: 'lock-record.html',
})
export class LockRecordPage {

  title = '用锁记录';
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LockRecordPage');
  }

}
