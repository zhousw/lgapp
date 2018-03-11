import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ModalController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-my-lock',
  templateUrl: 'my-lock.html',
})
export class MyLockPage {
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

  ownLock(){

  }

}
