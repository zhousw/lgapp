import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-add-of-lock',
  templateUrl: 'add-of-lock.html',
})
export class AddOfLockPage {

  lock={
    alias : '' ,
    number : ''
  }
  
  
  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     private viewCtrl : ViewController
    ) {
  }

  closeModal(){
    this.navCtrl.pop();
  }

  add(){
    this.viewCtrl.dismiss(this.lock);
  }

}
