import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ApiService} from '../api.service';
import { LoadingController, ToastController,Events,AlertController,NavController  } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.scss','../create_form.css'],
})
export class AddLocationComponent implements OnInit {
  public page: string;
  myform: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _apiservice: ApiService,
    public loadingController: LoadingController,
    public alertController: AlertController,
    public toastController: ToastController,
    private navCtrl:NavController,
    private route: ActivatedRoute,
    private storageService: StorageService,

  ) { }

  ngOnInit() {

    this.page = this.route.snapshot.paramMap.get('page');
    

    this.myform = this._formBuilder.group({
      location_name   : ['', [Validators.required]],
      is_active:['1',],
    });
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
              this.storageService.announceUpdate();  
              loading.dismiss(); 
              this.presentAlert("Sucess!!!","Data Submitted Successfully","");
              this.navCtrl.pop();
            }
          );
    }
  }

}
