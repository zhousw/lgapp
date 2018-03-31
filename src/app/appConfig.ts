import { Injectable} from "@angular/core";

@Injectable()
export class AppConfig{

    getRootUrl() {
        //return "http://114.55.144.109:80/APPServer";
        return "http://192.168.0.3:8090/appsrv";
    }

}