export class RequestData {
    reqHead : reqHead
    reqBody: any
    reqKey: string

    constructor(){
        this.reqHead = new reqHead("","","");
        this.reqBody={};
        this.reqKey = "";
    }

    get_reqHead() {
        return this.reqHead;
    }

    set_reqHead(token: string,userType: string,id: string) {
       this.reqHead = new reqHead(token,userType,id);
       return this.reqHead;
    }

    get_reqBody() {
        return this.reqBody;
    }

    set_reqBody(_reqBody: any) {
        this.reqBody = _reqBody;
    }

    get_reqKey() {
        return this.reqKey;
    }

    set_reqKey(_reqKey: string) {
        this.reqKey = _reqKey;
    }

}
    class reqHead{
        _token: string
        _userType: string
        _id: string

        constructor( token: string,userType: string, id: string){
            this._token = token;
            this._userType = userType;
            this._id = id;
        }

        public get token() {
            return this._token;
        }
        public set token(_token:string){
            this._token = _token;
        }

        public get userType() {
            return this._userType;
        }
        public set userType(_userType:string){
            this._userType = _userType;
        }

        public get id() {
            return this._id;
        }
        public set id(_id:string){
            this._id = _id;
        }

    }