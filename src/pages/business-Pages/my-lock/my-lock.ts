import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { ComponentUtil } from "../../../utils/ComponentUtil";

@IonicPage()
@Component({
  selector: 'page-my-lock',
  templateUrl: 'my-lock.html',
  providers:[
    ComponentUtil
  ]
})
export class MyLockPage {

  title = '我的锁';
  lockList=[
    {
      name : '一号锁',
      status:'空闲',
      number:'17757920735'
    },
    {
      name : '二号锁',
      status:'在用',
      number:'17757920735'
    }
  ]

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private componentUtil:ComponentUtil,
    private ModalCtrl:ModalController
  ) {
  }

  chooseLock(){
    this.componentUtil.PaySheet();
  }

  delete(index){
    this.lockList.splice(index,1);
  }

  addLock(){
    let modal = this.ModalCtrl.create('AddOfLockPage')
   
    modal.onDidDismiss( data=>{
      let newLock = {
        name:data.alias,
        status:'空闲',
        number:data.number
      }
      this.lockList.push(newLock)
    })
    modal.present();
  }

}
