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
}

