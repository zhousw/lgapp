import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { CommonUtil } from "../../../utils/commonUtil";
import * as $ from "jquery";
import { RequestData } from "../../../model/requestData";
import * as Encrypt from 'jsencrypt';
import { Buffer } from 'buffer';
import { Md5 } from "ts-md5";
import * as angular from "angular";
import { CommonServiceProvider } from "../../../providers/common-service/common-service";
import { LoginServiceProvider } from "../../../providers/login-service/login-service";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers:[
    CommonUtil,
    CommonServiceProvider,
    LoginServiceProvider
  ]
})
export class LoginPage {

  title = '登录/注册';
  tabs: string ="login";
   parm = new Map();
  private loginForm : FormGroup;
  constructor(
    public navCtrl: NavController,
    private commonUtil:CommonUtil,
    public navParams: NavParams,
    private formBuilder:FormBuilder,
    private commonServiceProvider:CommonServiceProvider,
    private loginServiceProvider:LoginServiceProvider
  ) {
    this.loginForm=this.formBuilder.group({
      userName:['',Validators.required],
      passWord:['',Validators.required]
  });

    let reqHead ={
      _token:'',
      _userType:1,
      _id:1
    }

    let publicKey = 'MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBALcNI4LbUUiBbJSiJOm+L9xEYke2 wXfnWJ4BzCJFKbnob+QT2i8lyKlpvYrW2l977it+JDzv9fcH73F/cXJrI+0C AwEAAQ=='
    let encrypt = new Encrypt.JSEncrypt();
    encrypt.setPublicKey(publicKey);
    let data = encrypt.encrypt('123456');
    let baseDta = new Buffer(data).toString('base64');
    console.log("base64密码:"+baseDta)
    let reqBody = {
      mobile:"13868986074",
      password:"",
      imei:"",
      phoneNum:"13868986074"
    }
    reqBody.password = baseDta;

    console.log("json数据:"+angular.toJson(reqHead) + encodeURI(angular.toJson(reqBody))+"_"+'')
    let reqKey1 = Md5.hashStr(angular.toJson(reqHead) + encodeURI(angular.toJson(reqBody))+"_"+'')
    console.log('json_reqKey:',reqKey1)

    console.log("数据:"+reqHead.toString() + encodeURI(reqBody.toString())+"_"+'')
    let reqKey2 = Md5.hashStr(reqHead.toString() + encodeURI(reqBody.toString())+"_"+'')
    console.log('reqKey:',reqKey2)





    }

  

    login(values){
        let userName = $.trim(values.userName)
        let passWord   = $.trim(values.passWord)
        if( this.commonUtil.isNull(userName)){
          this.commonUtil.toast_position("请输入用户名！",'bottom');
          return;
        }else if( this.commonUtil.isNull(passWord)){
          this.commonUtil.toast_position("请输入密码",'bottom');
          return;
        }

      this.navCtrl.setRoot('TabsPage');
    }



}
