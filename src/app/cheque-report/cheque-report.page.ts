import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cheque-report',
  templateUrl: './cheque-report.page.html',
  styleUrls: ['./cheque-report.page.scss'],
})
export class ChequeReportPage implements OnInit {
  chequeReportForm: FormGroup;
  public chequereport: any;
  constructor() { }

  ngOnInit() {
  }

}
