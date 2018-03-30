import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { CommonUtil } from "../../../utils/commonUtil";
import * as $ from "jquery";
import { RequestData } from "../../../model/requestData";
import * as Encrypt from 'jsencrypt';
import { Md5 } from 'ts-md5/dist/md5';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers:[
    CommonUtil,
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
      let userName = $.trim(values.userName)
      let passWord   = $.trim(values.passWord)
      if( this.commonUtil.isNull(userName)){
        this.commonUtil.toast_position("请输入用户名！",'bottom');
        return;
      }else if( this.commonUtil.isNull(passWord)){
        this.commonUtil.toast_position("请输入密码",'bottom');
        return;
      }
      //   let requestData = new RequestData();
      //   //requestData.set_reqHead("0","1","0");
      //   requestData.set_reqBody({
      //     mobile:'',
      //     password:passWord,
      //     imei:'',
      //     phoneNum:userName
      //   })
      // requestData.set_reqKey('fe344b6ebe86404d6a978c813ba7b460');
      // this.commonServiceProvider.HttpPost("http://114.55.144.109/carLogin",requestData).then(res=>{
      //   alert('11')
      // });
      let key = 'MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBALcNI4LbUUiBbJSiJOm+L9xEYke2 wXfnWJ4BzCJFKbnob+QT2i8lyKlpvYrW2l977it+JDzv9fcH73F/cXJrI+0C AwEAAQ=='
      let encrypt = new Encrypt.JSEncrypt();
        encrypt.setPublicKey(key);
        let data = encrypt.encrypt('123456');
         console.log(data);
         console.log(encodeURI(data));
         console.log(encodeURI(data).replace(/\+/g, '%2B'));
         console.log("md5")
         console.log(Md5.hashStr("123456").toString());
         console.log("key")
         console.log(Md5.hashStr("2a0c4efab9a311f2ea0710348c320771").toString());


      this.navCtrl.setRoot('TabsPage');
  }



}
