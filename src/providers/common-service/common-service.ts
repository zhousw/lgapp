import { Http ,Headers ,RequestOptions } from '@angular/http';
import { Injectable, Component } from '@angular/core';
import { CommonUtil } from "../../utils/commonUtil";
import * as angular from "angular";

@Injectable()
@Component({
  providers:[
    CommonUtil
  ]
})
export class CommonServiceProvider {
  

  constructor(
    private http: Http,
    private commonUtil:CommonUtil,
  ) {}

  HttpPost(url,requestBody?,Header?:Headers){
    if(this.commonUtil.isNull(Header)){
      
      Header = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    }
    // if(!this.commonUtil.isNull(AppConfig.sessionId)){
    //   url = url + ';jsessionid=' + AppConfig.sessionId;
    //http://114.55.144.109
    // }
    return this.http.post(url,angular.toJson(requestBody),new RequestOptions({headers: Header}))
      .toPromise()
      .then(res => this.handleSuccess(res.json())) 
      .catch(error => this.handleError(error))
    }

    private handleSuccess(result) {
      alert('result')
      if (result && !(result.retcode != '00')) {
        this.commonUtil.toast_position(result.msg,'bottom');                                           
      }                                      
      return result; 
    }

    private handleError(error: Response | any) {
      let msg = '获取数据失败!';
      if (error.status == 0) {
        msg = '请求地址错误';
      }
      if (error.status == 400) {
        msg = '请求无效';
        console.log('请检查参数类型是否匹配');
      }
      if (error.status == 404) {
        msg = '请求资源不存在';
        console.error(msg+'，请检查路径是否正确');
      }
      this.commonUtil.toast_position(msg,'bottom'); //由这里统一处理error,不需要每次都catch
      console.log(error,msg);
      return {retcode: -1, msg: msg};
    }

}
