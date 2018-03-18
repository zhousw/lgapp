import { Injectable} from "@angular/core";
import * as angular from 'angular';
import { ToastController,LoadingController  } from 'ionic-angular';

@Injectable()
export class CommonUtil{

    constructor(
        private  toastCtrl    : ToastController,
        private  loadCtrl     : LoadingController
    ){ }

    /**
     * 判断是否为空
     * @param data 数据
     */
    public isNull (data){
        if(data == null || data == '' || angular.isUndefined(data)){
            return true;
        }else{
            return false;
        }
    }

    /**
     * 通用消息提示
     * @param msg 提示信息
     * @param position 位置（"top", "middle", "bottom"）
     * @param time 时间（单位毫秒），默认1.5秒
     */
    toast_position(msg:string,position:string,time?:number){
        this.toastCtrl.create({
            message : msg,
            duration: time || 1500,
            position: position,
            cssClass:'toast-text'
          }).present();
    };

    /**
     * 通用消息提示（带关闭按钮）
     * @param msg 提示信息
     * @param position 位置（"top", "middle", "bottom"）
     */
    Toast_closeButton(msg:string,position:string) {
         this.toastCtrl.create({
          message: msg,
          position: position,
          showCloseButton:true,
          closeButtonText:'关闭',
          dismissOnPageChange:true,
          cssClass:'toast-text'
        }).present();
    }

    /**
     * 通用加载提示
     * @param msg 提示信息
     * @returns 返回加载对象
     */
    loading(msg:string){
        let loader = this.loadCtrl.create({
            content: msg,
          });
          loader.present();
          return loader;
    }
}