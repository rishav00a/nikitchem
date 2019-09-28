import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import {ApiService} from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, ToastController,Events,ActionSheetController, AlertController,IonSelect, NavController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Router } from '@angular/router';

class ShopDet {
  public shop_name:string;
}

@Component({
  selector: 'app-order-not-placed',
  templateUrl: './order-not-placed.page.html',
  styleUrls: ['./order-not-placed.page.scss'],
})
export class OrderNotPlacedPage implements OnInit {
  onpForm: FormGroup;
  public shop_id;
  public task_id;
  public shop_detail:ShopDet={
    shop_name:"",
  };

  public map_location = 'Not Fetched';
  public location_fetched:boolean=false;
  public uploadImagefront;
  public uploadImage1;
  processing0:boolean;
  processing1:boolean;
  
  public file0;
  public file1;


  constructor(
    public location: Location,
    private _formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private _apiservice: ApiService,
    public loadingController: LoadingController,
    private geolocation: Geolocation,   
    public alertController: AlertController,
    private camera: Camera, 

  ) { }

  async ngOnInit() {

    this.onpForm = this._formBuilder.group({      
      remarks:['',],  
      location:['',],
      picfront:['',],
      pic1:['',],
      dealer:['',]
    });

    const loading = await this.loadingController.create({
      message: 'Please Wait',
      duration: 20000
    });

    await loading.present();
   
    this.shop_id = this.route.snapshot.paramMap.get('id');
    this.task_id = this.route.snapshot.paramMap.get('task_id');
    this._apiservice.getOption("api/sales/shop_detail/"+this.shop_id).subscribe(data => {
      loading.dismiss();
      this.shop_detail=data[0];
      
      
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
          }

  }

  
  imageLoaded(index){
    switch (index){

      case 0: this.processing0 = false ;break;
      case 1: this.processing1=false; break;
    }
  }

  imageloading(index){
    switch (index){

      case 0: this.processing0 = true ;break;
      case 1: this.processing1=true; break;
    }
  }

  removePic(index) {
    switch (index){

      case 0: this.uploadImagefront = null ; this.file0=null;break;
      case 1: this.uploadImage1=null;  this.file1=null;break;
    }
  }

  async onpSubmit(){
    this.onpForm.value.location = this.map_location; 
    this.onpForm.value.picfront = this.uploadImagefront;
    this.onpForm.value.pic1 = this.uploadImage1;
    this.onpForm.value.dealer = this.shop_id;

    if(! this.location_fetched){
      this.presentAlert("Oops!!!","Please Fetch the Location.","");
    }
    else if(this.onpForm.valid && this.location_fetched && this.uploadImagefront && this.uploadImage1){
      const loading = await this.loadingController.create({
        message: 'Please Wait',
        duration: 20000
      });

      await loading.present();
      this._apiservice.postForm("api/sales/onp",this.onpForm.value).subscribe(
        data => {
          loading.dismiss();
          this.presentAlert("Success!!!","Form Submitted Successfully.","");
          this.location.back();        
          
        },
        error=>{
          loading.dismiss(); 
          this.presentAlert("Oops!!!","Some Error Occured","");
        });     
      
    }
    else{
      this.presentAlert("Oops!!!","Please fill all the fields correctly.","");
    }
  }

}
