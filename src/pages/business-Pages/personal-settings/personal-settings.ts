import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ActionSheetController,ModalController } from 'ionic-angular';
import { CommonUtil } from "../../../utils/commonUtil";

@IonicPage()
@Component({
  selector: 'page-personal-settings',
  templateUrl: 'personal-settings.html',
  providers:[
    CommonUtil
  ]
})
export class PersonalSettingsPage {
  title = '个人设置';
  realName = '测试';
  userName = '17757920735';
  phone = '17757920735';
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private actionSheetCtrl:ActionSheetController,
    private commonUtil:CommonUtil,
    private modalCtrl:ModalController
  ) {
  }

  update_headPhoto(){
    let actionSheet = this.actionSheetCtrl.create({
      title: '图片来源',
      enableBackdropDismiss:false,
      buttons: [
        {
          text: '拍照',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },{
          text: '从相册中选择',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: '取消',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  update_realName(){
    this.commonUtil.toast_position("用户已认证或认证中不可修改",'middle');
  }

  update_userName(){
    this.commonUtil.toast_position("用户已认证或认证中不可修改",'middle');
  }

  update_phone(){
    this.commonUtil.toast_position("用户已认证或认证中不可修改",'middle');
  }

  update_passWord(){
    this.modalCtrl.create('PasswordPage').present();
  }

}
