import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()

export class ServerServices{
    constructor (private http: HttpClient){}

    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/x-www-form-urlencoded'
        })
    };

    getServers(){
        return this.http.get('https://api.backendless.com/1C2448EC-1588-C063-FFD4-BB54E0147200/93B04720-7FC5-492A-9BDC-F601D03D645F/services/Employee/getEmp')
    }

    getLogin(username: string, password: string){
        return this.http.post('https://stackedtray.backendless.app/api/users/login',{login:username,password:password})
    }

    postRegister(registerName: string, registerEmail: string,registerPassword: string){
        return this.http.post('https://stackedtray.backendless.app/api/users/register',{name:registerName,email:registerEmail,password:registerPassword })
    }

    deleteEmp(objectId:string){
        const formData = new FormData();
        formData.append('ID', objectId);
        return this.http.post(
            'https://api.backendless.com/1C2448EC-1588-C063-FFD4-BB54E0147200/93B04720-7FC5-492A-9BDC-F601D03D645F/services/Employee/delEmp',
            formData,
            this.httpOptions
        );
    }

}