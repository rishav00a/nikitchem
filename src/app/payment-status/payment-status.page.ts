import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuController, IonSlides,NavController } from '@ionic/angular';
import { LoadingController, ToastController,Events,AlertController  } from '@ionic/angular';
import {ApiService} from '../api.service';


@Component({
  selector: 'app-payment-status',
  templateUrl: './payment-status.page.html',
  styleUrls: ['./payment-status.page.scss'],
})
export class PaymentStatusPage implements OnInit {
  paymentstatusForm: FormGroup;

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

    this.paymentstatusForm = this._formBuilder.group({
      due_date : ['', [Validators.required]],
      party_name : ['', [Validators.required]],
      due_amount : ['', [Validators.required]],
      cheque_deposite : ['', [Validators.required]],
      cheque_status : ['', [Validators.required]],
            

    }); 
  }

  async submitForm(){
    const loading = await this.loadingController.create({
      message: 'Uploadind Data...',
      duration: 5000
    });
    await loading.present();

    if(this.paymentstatusForm.valid)
    {

      this._apiservice.postPaymentStatusForm(this.paymentstatusForm.value)
        .subscribe(data => {
          console.log(data);
              loading.dismiss();
              this.navCtrl.pop();
            }
          );
    }

  }

}
