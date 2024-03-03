import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
}
export class User{
  username:string;
  password:string;
  mobno:number;
  emailid:string;

  public constructor(username:string,password:string,mobno:number,emailid:string){
    this.username=username;
    this.password=password;
    this.mobno=mobno;
    this.emailid=emailid;
  }
}
