import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/filter';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';
import { UserDetail } from "../../shared/userdetail.module";


@Injectable()
export class AppService {
  detailsUser: UserDetail;
  globalVariable: any = [];
  subject: Subject<any>;
  isFrHeaderDisplay: boolean = true; //check whether header is display or not
  isFrCommonControlDisplay: boolean = true; //check whether common control / pop up is open or not
  isServicePathPopUpDisplay: boolean = true; //whether service path pop up is open or not
  isLogedIn: boolean = true;// check whether user Logedin OR not
  constructor(private http: Http) {
    this.subject = new Subject();
  }


  loginUserDetails(data: any) {
    debugger
    let body = JSON.parse(data);
    let headerOptions = new Headers({ 'Content-Type': 'application/json' });
    let requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this.http.post('http://localhost:10364/Api/UserDetails/IEnumerableGetUserDetail2', body, requestOptions).pipe(map(x => x.json()));
  }
  userType() {
    debugger
    let headerOptions = new Headers({ 'Content-Type': 'application/json' });
    let requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this.http.post('http://localhost:10364/Api/UserDetails/IEnumerableGetUserType', requestOptions).pipe(map(x => x.json()));
  }
  isRegistration(data) {
    let body = data;
    let headerOptions = new Headers({ 'Content-Type': 'application/json' });
    let requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this.http.post('http://localhost:10364/Api/UserDetails/IEnumerableRegistration', body, requestOptions).pipe(map(x => x.json()));
  }
  isSalesJson(data) {
    let body = data;
    let headerOptions = new Headers({ 'Content-Type': 'application/json' });
    let requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this.http.post('http://localhost:10364/Api/UserDetails/IEnumerableUploadSalesData', body, requestOptions).pipe(map(x => x.json()));
  }


  getGlobalVariables(key) {
    return (this.globalVariable[key]);
  }

  setGlobalVariables(key, value) {
    this.globalVariable[key] = value;
  }

  // getMessage(key) {
  //   return messages[key];
  // }

  // httpPost(id: string, body?: any, method?: string, header?: any) {
  //   let servicePath = this.getGlobalVariables('servicePath');
  //   let url = 'http://' + servicePath + '/' + method;
  //   let headers: any;
  //   let options: any;
  //   if (header) {
  //     if (header.contentType) {
  //       headers = new Headers({ 'Content-Type': header.contentType });
  //       options = new RequestOptions({ headers: headers });
  //     }
  //   }

  //   if (method == 'InsertUpdateDeleteForJScript') {
  //     headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });

  //     options = new RequestOptions({ headers: headers });
  //   }

  //   this.http
  //     .post(url, body, options)
  //     .map(response => response.json())
  //     .subscribe(d => {
  //       this.subject.next({ id: id, data: d });
  //     }, err => {
  //       this
  //         .subject.next({ id: id, data: { error: err } });
  //     });
  // }

  // filterOn(id: string): Observable<any> {
  //   return (this.subject.filter(d => (d.id === id)));
  // };

  // getGlobalVariables(key) {
  //   return (this.globalVariable[key]);
  // }

  // setGlobalVariables(key, value) {
  //   this.globalVariable[key] = value;
  // }

  // emit(id: string, options?: any) {
  //   this.subject.next({ id: id, data: options });
  // }

}