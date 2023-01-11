import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = "http://waterworks.digitalrupay.com/apirt1/waterflow/watersamplelist";

  constructor(private http: HttpClient) { }

  getListData(page:number) {
    return this.http.get<any>(this.url + '?page=' + page)
  }
}
