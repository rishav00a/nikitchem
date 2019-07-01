import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { BillEntryModel} from './_models';
import { Observable } from "rxjs/Observable";

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
}

