
import { Injectable } from "@angular/core";
import { CommonServiceProvider } from "../common-service/common-service";
import { AppConfig } from "../../app/appConfig";
import * as angular from "angular";
@Injectable()
export class LoginServiceProvider {

  constructor(
    private commonServiceProvider : CommonServiceProvider,
    private appConfig:AppConfig
  ) {}

  getPublicKey(reqHead,reqBody,reqKey){
      return this.commonServiceProvider.HttpPost(this.appConfig.getRootUrl()+"/getPublicKey",{
        reqHead:reqHead,
        reqBody:reqBody,
        reqKey:reqKey
      });
  }

  login(reqHead,reqBody,reqKey){
    return this.commonServiceProvider.HttpPost(this.appConfig.getRootUrl()+"/carLogin",{
        reqHead:reqHead,
        reqBody:reqBody,
        reqKey:reqKey
    });
  }


}
