import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  // @ts-ignore
  private isLogin = new BehaviorSubject(false);
  currentLoginStatus = this.isLogin.asObservable();

  changeLoginStatus(status : boolean){
    this.isLogin.next(status);
  }

  constructor() { }

}

