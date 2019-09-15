import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ApiService} from '../api.service';
import { LoadingController, ToastController,Events,AlertController,NavController  } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from '../_services/storage.service';
import { IonicSelectableComponent } from 'ionic-selectable';

class Port {
  public pk: number;
  public location_name: string;
}

@Component({
  selector: 'app-add-salesman',
  templateUrl: './add-salesman.component.html',
  styleUrls: ['./add-salesman.component.scss',
              '../create_form.css'],
})
export class AddSalesmanComponent implements OnInit {

  public page: string;
  myform: FormGroup;
  public location_options=[];

  public port :Port;



  constructor(
    private _formBuilder: FormBuilder,
    private _apiservice: ApiService,
    public loadingController: LoadingController,
    public alertController: AlertController,
    public toastController: ToastController,
    private navCtrl:NavController,
    private route: ActivatedRoute,
    private storageService: StorageService,
  ) { 
    
  } 

  ngOnInit() {

    this.page = this.route.snapshot.paramMap.get('page');
    

    this.myform = this._formBuilder.group({
      name   : ['', [Validators.required]],
      mobile_no:['', [Validators.required]],
      email:['',[Validators.email]],
      location:[],
    });

    this._apiservice.getOption("api/general_modules/get_location_option").subscribe(data => { 
        this.location_options=data;
      }
    );


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
    
  
    if(this.myform.valid)
    {
      await loading.present();
      this._apiservice.postCreateForm(this.myform.value,this.page)
        .subscribe(data => { 
              console.log(data["submitted"]);
              loading.dismiss(); 
              if(data["submitted"])
              {
                this.storageService.announceUpdate(); 
                this.presentAlert("Sucess!!!","Data Submitted Successfully","");
              }
              else{
                this.presentAlert("Oops!!!",data["resp_msg"],"");
              }
              
              this.navCtrl.pop();
            }
          );
    }
  }

  compareWithFn = (o1, o2) => {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  };

  compareWith = this.compareWithFn;


  portChange(event: {
    component: IonicSelectableComponent,
    value: any 
  }) {
    console.log('port:', event.value);
  }

}
