import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { CommonUtil } from "../../../utils/commonUtil";
import { TabsPage } from '../../tab-Pages/tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers:[
    CommonUtil
  ]
})
export class LoginPage {

  title = '登录/注册';
  tabs: string ="login";

  private loginForm : FormGroup;
  constructor(
    public navCtrl: NavController,
    private commonUtil:CommonUtil,
    public navParams: NavParams,
    private formBuilder:FormBuilder,
  ) {
    this.loginForm=this.formBuilder.group({
        userName:['',Validators.required],
        passWord:['',Validators.required]
    });
  }

  login(values){
    // let phone = $.trim(values.phone)
    // let pwd   = $.trim(values.pwd)
    if( this.commonUtil.isNull(values.userName)){
      this.commonUtil.toast_position("请输入用户名！",'bottom');
      return;
    }else if( this.commonUtil.isNull(values.passWord)){
      this.commonUtil.toast_position("请输入密码",'bottom');
      return;
    }
    window.localStorage.setItem('isLogin','isLogin');
    this.navCtrl.setRoot(TabsPage);
  }



}
