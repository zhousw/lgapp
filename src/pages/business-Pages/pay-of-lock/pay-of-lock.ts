import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-pay-of-lock',
  templateUrl: 'pay-of-lock.html',
})
export class PayOfLockPage {

  title = '';
  price = '';

  constructor(
    public navCtrl: NavController, public navParams: NavParams
  ) {
    this.title = navParams.get('title');
    this.price = navParams.get('price');
  }

  closeModal(){
    this.navCtrl.pop();
  }

}
