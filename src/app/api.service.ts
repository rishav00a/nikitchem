import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { BillEntryModel} from './_models';
import { Observable } from "rxjs/Observable";
import { menuitemdetails} from "../global"
const API_URL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(
    private http: HttpClient
  ) {}

    public postContactForm(formbody): Observable<BillEntryModel> {
      return this.http.post<BillEntryModel>(API_URL + 'api/salesman/billreceive/',formbody);
    }  
    public postPaymentStatusForm(formbody){
      return this.http.post(API_URL + 'api/salesman/payment_statusd/',formbody);
    }
    public postChequeReportForm(formbody){
      return this.http.post(API_URL + 'api/salesman/cheque_reportd/',formbody);
    }
    public postCreateForm(formbody,page) {
      return this.http.post(API_URL + menuitemdetails[page].create_api,formbody);
    }  
    public getListData(page): Observable<any[]> {
      return this.http.get<any[]>(API_URL + menuitemdetails[page].list_api);
    }
    public getOption(url): Observable<any[]> {
      return this.http.get<any[]>(API_URL + url);
    }
}

