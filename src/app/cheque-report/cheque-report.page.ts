import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuController, IonSlides,NavController } from '@ionic/angular';
import { LoadingController, ToastController,Events,AlertController  } from '@ionic/angular';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-cheque-report',
  templateUrl: './cheque-report.page.html',
  styleUrls: ['./cheque-report.page.scss'],
})
export class ChequeReportPage implements OnInit {
  chequeReportForm: FormGroup;
  public chequereport: any;

  constructor(
    public menu: MenuController,
    private _formBuilder: FormBuilder,
    public loadingController: LoadingController,
    private _apiservice: ApiService,
    private navCtrl:NavController,
  ) { } 

  ionViewWillEnter() {
    this.menu.enable(true);
  }

  ngOnInit() {
    this.chequeReportForm = this._formBuilder.group({
      bill_no:['', [Validators.required]],
      bill_date:['', [Validators.required]],
      party_name:['', [Validators.required]],
      amount:['', [Validators.required]],
      overdue_days:['', [Validators.required]],
      rate_of_interest:['', [Validators.required]],
      interest_amount:['', [Validators.required]],
      cheque_bounce_charges:['', [Validators.required]],
      total_amount:['', [Validators.required]],
      cheque_deposite:['', [Validators.required]],
      cheque_status:['', [Validators.required]],
            

    }); 
  }


  async submitForm(){
    const loading = await this.loadingController.create({
      message: 'Uploadind Data...',
      duration: 5000
    });
    await loading.present();

    if(this.chequeReportForm.valid)
    {

      this._apiservice.postChequeReportForm(this.chequeReportForm.value)
        .subscribe(data => {
          console.log(data);
              loading.dismiss();
              this.navCtrl.pop();
            }
          );
    }

  }

}
