import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ActionSheetController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-system-settings',
  templateUrl: 'system-settings.html',
})
export class SystemSettingsPage {

  title = '系统设置';
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private actionSheetCtrl:ActionSheetController
  ) {
  }

  clearCache(){
    let actionSheet = this.actionSheetCtrl.create({
      title: '确定清除缓存吗',
      enableBackdropDismiss:false,
      buttons: [
        {
          text: '确定',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },
        {
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

  loginOut(){
    
  }

}
