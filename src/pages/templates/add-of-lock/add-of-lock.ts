import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { ZBar, ZBarOptions } from '@ionic-native/zbar';

@IonicPage()
@Component({
  selector: 'page-add-of-lock',
  templateUrl: 'add-of-lock.html',
  providers:[
    ZBar
  ]
})
export class AddOfLockPage {

  lock={
    alias : '' ,
    number : ''
  }
  
  
  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     private viewCtrl : ViewController,
     private zbar: ZBar
    ) {
  }

  closeModal(){
    this.navCtrl.pop();
  }

  add(){
    this.viewCtrl.dismiss(this.lock);
  }

  qrScan(){
    let options: ZBarOptions = {
      flash: 'off',
      text_title: '扫码',
      text_instructions: '请将二维码置于中央',
      drawSight: true
    };

    this.zbar.scan(options)
      .then(result => {
        alert("结果：" + result); // Scanned code
      })
      .catch(error => {
        alert(error); // Error message
      });
  }

}
