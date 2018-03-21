import { Injectable} from "@angular/core";
import { ActionSheetController} from 'ionic-angular';

@Injectable()
export class ComponentUtil{

    constructor(
        private actionSheetCtrl:ActionSheetController
    ){}

    wechatPaySheet() {
        let actionSheet = this.actionSheetCtrl.create({
          title: '确认付款',
          enableBackdropDismiss:false,
          buttons: [
            {
              text: '微信支付',
              role: 'destructive',
              handler: () => {
                console.log('Archive clicked');
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

      PaySheet() {
        let actionSheet = this.actionSheetCtrl.create({
          title: '确认付款',
          enableBackdropDismiss:false,
          buttons: [
            {
              text: '余额支付',
              role: 'destructive',
              handler: () => {
                console.log('Archive clicked');
              }
            },
            {
              text: '微信支付',
              handler: () => {
                console.log('Archive clicked');
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
}