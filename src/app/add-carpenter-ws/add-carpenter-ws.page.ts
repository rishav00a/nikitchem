import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../_services';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LoadingController, ToastController,Events,NavController, AlertController, Platform, ActionSheetController } from '@ionic/angular';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-add-carpenter-ws',
  templateUrl: './add-carpenter-ws.page.html',
  styleUrls: ['./add-carpenter-ws.page.scss'],
})
export class AddCarpenterWsPage implements OnInit {
  addcwForm: FormGroup;
  public userprof;
  public map_location = 'Not Fetched';
  public location_fetched:boolean=false; 


  constructor(
    public loadingController: LoadingController,
    private geolocation: Geolocation,
    public alertController: AlertController,
    public location: Location,
    private _formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private navCtrl:NavController,
    private _apiservice: ApiService,
  ) { }

  ngOnInit() {
    this.addcwForm = this._formBuilder.group({
      shop_name: ['',],
      shop_type:['', [Validators.required,]],
      owner_name:['', [Validators.required,]],
      phone:['', [Validators.required,]],
      email:['',],
      city:['', [Validators.required,]],
      pin:['', [Validators.required,]],
      locality:['', [Validators.required,]],
      address:['', [Validators.required,]],
      location:['', [Validators.required,]],
      remarks:['', ],
      dealer_name:['', [Validators.required,]],
      dealer_address:['', [Validators.required,]]
    });
    this.authenticationService.CurrentUserProfile.subscribe( value => {
      this.userprof=value?value:{};
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

  async getlocation(){
    const loading = await this.loadingController.create({
      message: 'Fetching Location',
      duration: 20000
    });

    await loading.present();

    this.geolocation.getCurrentPosition().then((resp) => {
      this.map_location=resp.coords.latitude+","+resp.coords.longitude;
      loading.dismiss(); 
     }).catch((error) => {
      loading.dismiss(); 
      this.presentAlert("Oops!!!","Coudn't fetch location","");
       console.log('Error getting location', error);
     });
     this.location_fetched=true;
  }
  async addcwfn(){
    this.addcwForm.value.location = this.map_location;
    if(! this.location_fetched){
      this.presentAlert("Oops!!!","Please fetch the location","");
    }
    else if(! this.addcwForm.valid){
      this.presentAlert("Oops!!!","Please fill all the fields correctly.","");
    }
    else if(this.addcwForm.valid){
      const loading = await this.loadingController.create({
        message: 'Please Wait',
        duration: 20000
      });

      await loading.present();
      this._apiservice.postForm("api/sales/add_cw",this.addcwForm.value)
        .subscribe(data => { 
              loading.dismiss(); 
              this.presentAlert("Sucess!!!",this.addcwForm.value["shop_type"]+" Added Successfully","");
              this.location.back();
              
        },
        error=>{
          loading.dismiss(); 
          this.presentAlert("Oops!!!","Some Error Occured","");
        });

    }
  }


}
