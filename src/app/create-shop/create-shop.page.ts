import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { LoadingController, ToastController,Events,NavController, AlertController, Platform, ActionSheetController } from '@ionic/angular';
import {ApiService} from '../api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AuthenticationService } from '../_services';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';

@Component({
  selector: 'app-create-shop',
  templateUrl: './create-shop.page.html',
  styleUrls: ['./create-shop.page.scss'],
})
export class CreateShopPage implements OnInit {
  addshopForm: FormGroup; 

  public map_location = 'Not Fetched';
  public location_fetched:boolean=false; 
  public map_location_str = 'Not Fetched';

  processing0:boolean;
  processing1:boolean;
  processing2:boolean;
  public uploadImagefront;
  public uploadImage1;
  public uploadImage2;

  public file0;
  public file1;
  public file2;

  public userprof;

  constructor(
    public toastController: ToastController,
    public loadingController: LoadingController,
    private geolocation: Geolocation,
    public alertController: AlertController,
    public location: Location,
    private _formBuilder: FormBuilder,
    private camera: Camera,
    private authenticationService: AuthenticationService,
    private navCtrl:NavController,
    private _apiservice: ApiService,
    private router: Router,    
    private nativeGeocoder: NativeGeocoder

  ) { }

  ngOnInit() {
    this.addshopForm = this._formBuilder.group({
      shop_name: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      owner1: ['', [Validators.required]],
      owner2: ['',],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      pin: ['', [Validators.required, Validators.maxLength(6), Validators.minLength(6)]],
      remarks:['',],
      picfront:['',],
      pic1:['',],
      pic2:['',],
      location:['',],
      locality:['', [Validators.required]],
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

    let options: NativeGeocoderOptions = {
        useLocale: true,
        maxResults: 5
    };
  

    await loading.present();

    this.geolocation.getCurrentPosition().then((resp) => {
      this.map_location=resp.coords.latitude+","+resp.coords.longitude;

      this.nativeGeocoder.reverseGeocode(resp.coords.latitude, resp.coords.longitude, options)
      .then((result: NativeGeocoderResult[]) => {
        loading.dismiss(); 
        this.map_location_str = result[0]["areasOfInterest"]+" "+result[0]["locality"]+", "+result[0]["postalCode"];
      })
      .catch((error: any) => {
        this.map_location_str="Unknown";
        loading.dismiss(); 

      });
      
     }).catch((error) => {
      loading.dismiss(); 
      this.presentAlert("Oops!!!","Coudn't fetch location","");
       console.log('Error getting location', error);
     });
     this.location_fetched=true;
  }


  async captureImage(useAlbum: boolean,index) {
    
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      ...useAlbum ? {sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM} : {}
    }



    const imageData = await this.camera.getPicture(options);
    var base64Image = `data:image/jpeg;base64,${imageData}`;
    
    switch (index){

            case 0: this.uploadImagefront = base64Image ;break;
            case 1: this.uploadImage1=base64Image;break;
            case 2: this.uploadImage2=base64Image;break;
          }

  }

  
  imageLoaded(index){
    switch (index){

      case 0: this.processing0 = false ;break;
      case 1: this.processing1=false; break;
      case 2: this.processing2=false; break;
    }
  }

  imageloading(index){
    switch (index){

      case 0: this.processing0 = true ;break;
      case 1: this.processing1=true; break;
      case 2: this.processing2=true; break;
    }
  }

  removePic(index) {
    switch (index){

      case 0: this.uploadImagefront = null ; this.file0=null;break;
      case 1: this.uploadImage1=null;  this.file1=null;break;
      case 2: this.uploadImage2=null;  this.file2=null;break;
    }
  }

  async addshopfn() {
  

    this.addshopForm.value.location = this.map_location;
    this.addshopForm.value.picfront = this.uploadImagefront;
    this.addshopForm.value.pic1 = this.uploadImage1;
    this.addshopForm.value.pic2 = this.uploadImage2;

    if(this.addshopForm.valid && this.location_fetched && this.uploadImagefront)
    {

      const loading = await this.loadingController.create({
        message: 'Please Wait',
        duration: 20000
      });

      await loading.present();
      this._apiservice.postForm("api/sales/add_shop",this.addshopForm.value)
        .subscribe(data => { 
              loading.dismiss(); 
              this.presentAlert("Sucess!!!","Shop Added Successfully","");
              this.location.back();
              
        },
        error=>{
          loading.dismiss(); 
          this.presentAlert("Oops!!!","Some Error Occured","");
        });
    }
    else if(! this.location_fetched){
      this.presentAlert("Oops!!!","Please fetch the location","");
    }
    else if(! this.addshopForm.valid){
      this.presentAlert("Oops!!!","Please fill all the fields correctly.","");
    }
    
  }
 
}
