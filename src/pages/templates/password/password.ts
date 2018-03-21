import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-password',
  templateUrl: 'password.html',
})
export class PasswordPage {
  title='修改密码';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
  }

  closeModal(){
    this.navCtrl.pop();
  }

}
