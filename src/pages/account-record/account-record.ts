import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-account-record',
  templateUrl: 'account-record.html',
})
export class AccountRecordPage {

  title = '账户交易记录';
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountRecordPage');
  }

}
