import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,ActionSheetController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-car-info',
  templateUrl: 'car-info.html',
})
export class CarInfoPage {

  title = '车辆信息';
  carNumber = '17757920735';
  drivingNumber = '17757920735';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl:AlertController,
    private actionSheetCtrl:ActionSheetController
  ) {
  }

  update_carNumber(){
    let prompt = this.alertCtrl.create({
      title: '车牌号修改',
      message: "当前车牌号："+this.carNumber,
      inputs: [
        {
          name: 'carNumber',
          placeholder: '车牌号'
        },
      ],
      buttons: [
        {
          text: '取消',
          handler: data => {
          }
        },
        {
          text: '确定',
          handler: data => {
            this.carNumber = data.carNumber;
          }
        }
      ]
    });
    prompt.present();
  }

  update_drivingNumber(){
    let prompt = this.alertCtrl.create({
      title: '行驶证号码修改',
      message: "当前号码："+this.drivingNumber,
      inputs: [
        {
          name: 'drivingNumber',
          placeholder: '行驶证号'
        },
      ],
      buttons: [
        {
          text: '取消',
          handler: data => {
          }
        },
        {
          text: '确定',
          handler: data => {
            this.drivingNumber = data.drivingNumber;
          }
        }
      ]
    });
    prompt.present();
  }

  update_drivingLicense(){
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

}
