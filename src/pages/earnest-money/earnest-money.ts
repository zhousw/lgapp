import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-earnest-money',
  templateUrl: 'earnest-money.html',
})
export class EarnestMoneyPage {

  title='保证金记录';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EarnestMoneyPage');
  }

}
