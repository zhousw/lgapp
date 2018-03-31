import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { CommonUtil } from "../../../utils/commonUtil";
import * as $ from "jquery";
import { RequestData } from "../../../model/requestData";
import * as Encrypt from 'jsencrypt';
import { Md5 } from "ts-md5";
import * as angular from "angular";
import { LoginServiceProvider } from "../../../providers/login-service/login-service";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers:[
    CommonUtil,
    LoginServiceProvider,
    RequestData
  ]
})
export class LoginPage {

  title = '登录/注册';
  tabs: string ="login";

  requestData = new RequestData();
  private loginForm : FormGroup;
  
  constructor(
    public navCtrl: NavController,
    private commonUtil:CommonUtil,
    private formBuilder:FormBuilder,
    private loginServiceProvider:LoginServiceProvider
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

        this.requestData.set_reqHead("","1","0");
        this.requestData.set_reqKey("fe344b6ebe86404d6a978c813ba7b460");
        // alert("公钥head："+angular.toJson(this.requestData.get_reqHead()))
        // alert("公钥body："+angular.toJson(this.requestData.get_reqBody()))
        // alert("公钥key："+angular.toJson(this.requestData.get_reqKey()))
        this.loginServiceProvider.getPublicKey(
                              this.requestData.get_reqHead(),
                              this.requestData.get_reqBody(),
                              this.requestData.get_reqKey())
                .then(res=>{
                    alert("获取公钥结果:"+angular.toJson(res))
        })

      //公钥
      let publicKey = 'MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBALcNI4LbUUiBbJSiJOm+L9xEYke2 wXfnWJ4BzCJFKbnob+QT2i8lyKlpvYrW2l977it+JDzv9fcH73F/cXJrI+0C AwEAAQ=='
      let encrypt = new Encrypt.JSEncrypt();
      encrypt.setPublicKey(publicKey);
      passWord = encrypt.encrypt(passWord);
      this.requestData.set_reqBody({
        mobile:userName,
        password:passWord,
        imei:"",
        phoneNum:userName
      })
      this.requestData.set_reqHead("","1","1");
      this.requestData.set_reqKey(Md5.hashStr(angular.toJson(this.requestData.get_reqHead()) + encodeURIComponent(angular.toJson(this.requestData.get_reqBody()))+"_"+'').toString());
      // alert("登陆head："+angular.toJson(this.requestData.get_reqHead()))
      // alert("登陆body："+angular.toJson(this.requestData.get_reqBody()))
      // alert("登陆key："+angular.toJson(this.requestData.get_reqKey()))
      this.loginServiceProvider.login( 
                              this.requestData.get_reqHead(),
                              this.requestData.get_reqBody(),
                              this.requestData.get_reqKey())
                    .then(res=>{
                        alert("登陆结果:"+angular.toJson(res))
                        //this.navCtrl.setRoot('TabsPage');
                    })
    }



}
