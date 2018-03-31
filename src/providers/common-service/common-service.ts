import { Http ,Headers ,RequestOptions } from '@angular/http';
import { Injectable, Component } from '@angular/core';
import { CommonUtil } from "../../utils/commonUtil";
import * as angular from "angular";
import * as $ from "jquery"; 

@Injectable()
@Component({
  providers:[
    CommonUtil
  ]
})
export class CommonServiceProvider {
  constructor(
    private http: Http,
    private commonUtil:CommonUtil
  ) {}

  HttpPost(url,requestBody?,Header?:Headers){
    if(this.commonUtil.isNull(Header)){
      Header = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});// application/json;charset=UTF-8
    }
    alert(this.toBodyString(requestBody))
    return this.http.post(url,this.toBodyString(requestBody),new RequestOptions({headers: Header}))
      .toPromise()
      .then(res => this.handleSuccess(res.json())) 
      .catch(error => this.handleError(error))
    }

    private handleSuccess(result) {
      // if (result && !(result.retcode != '00')) {
      //   this.commonUtil.toast_position(result.msg,'bottom');                                           
      // }              
      alert(result);                        
      return result; 
    }

    private handleError(error: Response | any) {
      let msg = '获取数据异常!';
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

    //http请求时对body数据的处理
    private  toBodyString(obj) {
      let ret = [];
      for (let key in obj) {
        key = encodeURIComponent($.trim(key));
        let values =obj[key];
        if (values && values.constructor == Array) {//数组
          let queryValues = [];
          for (let i = 0, len = values.length, value; i < len; i++) {
            value = values[i];
            queryValues.push(this.toQueryPair(key, value));
          }
          ret = ret.concat(queryValues);
        } else if(typeof(values) == "object" && 
              Object.prototype.toString.call(values).toLowerCase() == "[object object]" ){ //json 对象
          ret.push(this.toQueryPair(key, JSON.stringify(values)));
        } else { //字符串
          ret.push(this.toQueryPair(key, values));
        }
      }
      return ret.join('&');
    }

    private  toQueryPair(key, value) {
      if (typeof value == 'undefined') {
        return key;
      }
      return key + '=' + encodeURIComponent(value === null ? '' : String(value));
    }

}
