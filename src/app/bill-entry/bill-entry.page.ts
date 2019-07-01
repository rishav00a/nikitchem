import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController,Events,AlertController  } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuController, IonSlides,NavController } from '@ionic/angular';
import {ApiService} from '../api.service';
import { AuthenticationService } from '../_services';

@Component({
  selector: 'app-bill-entry',
  templateUrl: './bill-entry.page.html',
  styleUrls: ['./bill-entry.page.scss'],
})
export class BillEntryPage implements OnInit {
  billentryForm: FormGroup;
  public billentry: any;
  public userprof ={};


  constructor(
      public menu: MenuController,
      public loadingController: LoadingController,
      public alertController: AlertController,
      public toastController: ToastController,
      private _formBuilder: FormBuilder,
      private _apiservice: ApiService,
      private navCtrl:NavController,
      private authenticationService: AuthenticationService

  ) { }
  ionViewWillEnter() {
    this.menu.enable(true);
  }
  ngOnInit() {

    this.userprof=this.authenticationService.currentUserProfileValue;

    this.billentryForm = this._formBuilder.group({
      client_type   : ['', [Validators.required]],//, Validators.email
      advance_in_days: ['', Validators.required],
      bill_date: ['', Validators.required],
      bill_no: [''],
      party_name: ['', Validators.required],
      amount: ['', Validators.required],
      advance_amount: [''],
      extra_discount: [''],
      due_date: [''],
      cheque_no: [''],
      cheque_date: ['']

    }); 
    this.billentry = {

        client_type:"",
        responsible_person:this.userprof,
        advance_in_days:"0",
        bill_date: new Date(), 
        bill_no:"",
        party_name:"",
        amount:"0",
        advance_amount:0,
        extra_discount:0,
        due_date:new Date(),
        cheque_no:"",
        cheque_date:new Date()

    };
  }

  reinitform(){
    this.billentry.advance_in_days="0";
    this.billentry.amount="0";
    this.billentry.advance_amount=0;
    this.billentry.extra_discount=0;
    this.billentryForm.reset();
  }

  get discount()
  {
    return parseInt(this.billentry.advance_amount)*3/100;
  }
  get gst()
  {
    return this.billentry.amount*18/100;
  }
  get amount_after_discount()
  {
    return parseInt(this.billentry.amount) + this.gst - (parseInt(this.billentry.advance_amount)*3/100 + parseInt(this.billentry.extra_discount))
  }

  get due_amount()
  {
    return (parseInt(this.billentry.amount) + this.gst - (parseInt(this.billentry.advance_amount)*3/100 + parseInt(this.billentry.extra_discount)))-parseInt(this.billentry.advance_amount)
  }

async loading()
{
  const loading = await this.loadingController.create({
    message: 'Uploadind Data...',
    duration: 5000
  });
  await loading.present();

}

  async presentAlert(header,subheader,msg) {
    const alert = await this.alertController.create({
      header: header,
      subHeader: subheader,
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }


 async submitForm(){
  const loading = await this.loadingController.create({
    message: 'Uploadind Data...',
    duration: 5000
  });
  await loading.present();

  if(this.billentryForm.valid)
  {

    this._apiservice.postContactForm(this.billentryForm.value)
      .subscribe(data => {
        console.log(data);
            loading.dismiss();
            this.presentAlert("Sucess!!!","Data Submitted Successfully","Refference id: "+data.ref_id);
            this.navCtrl.pop();
          }
        );
  }
 }
}
