export class RequestData {
    reqHead: {
        _token: string,
        _userType: string,
        _id: string
    }
    reqBody: any
    reqKey: string

    get_reqHead() {
        return this.reqHead;
    }

    set_reqHead(token: string,userType: string,id: string) {
       this.reqHead._token = token;
       this.reqHead._userType = userType;
       this.reqHead._id = id;
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