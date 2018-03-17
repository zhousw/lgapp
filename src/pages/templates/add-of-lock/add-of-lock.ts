import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-add-of-lock',
  templateUrl: 'add-of-lock.html',
})
export class AddOfLockPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  closeModal(){
    this.navCtrl.pop();
  }

}
