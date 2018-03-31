
import { Injectable } from '@angular/core';
import { Http ,Headers ,RequestOptions } from '@angular/http';

@Injectable()
export class LoginServiceProvider {

  constructor(
    private http: Http,
  ) {
    

    // Header = new Headers({'Access-Control-Allow-Origin': '*'});
    // this.http.post("http://114.55.144.109:80/APPServer/carLogin",{},new RequestOptions({headers: Header}))
    // .toPromise()
    //   .then(res=>{
    //     alert(res)
    //   }) 
    //   .catch(error => {
    //       alert(error)
    //   })






  }


}
