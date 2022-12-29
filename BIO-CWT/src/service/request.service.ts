import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
// {providedIn: 'moduli classi anun@'}// ete uzumenq moduli mej hasaneli exni mer service@
export class RequestService {
  constructor(public http: HttpClient) {     
    
  }

  //HttpHeaders set metod@ nayel tun@
  getData(url:string) {
    let header = new HttpHeaders({"Accept-lenguage": "en"})
    return this.http.get(url, {headers: header})
  }

  postData(url:string, value:any) {
    let header = new HttpHeaders({"Content-type": "application/json"})
    return this.http.post(url, value, {headers: header})
  }

  putData(url:string, value: any) {
    let header = new HttpHeaders({"Content-type": "application/json"})
    return this.http.put(url, value, {headers: header})
  }
  deleteData(url:string) {
    let header = new HttpHeaders({"Accept-lenguage": "en"})
    return this.http.delete(url, {headers: header})
  }
}

