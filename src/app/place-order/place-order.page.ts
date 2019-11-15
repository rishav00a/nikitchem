import { Component, OnInit, Input, ViewChild } from '@angular/core'; 
import { Location } from "@angular/common";
import {ApiService} from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, ToastController,Events,ActionSheetController, AlertController,IonSelect, NavController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Router } from '@angular/router';
import { IonicSelectableComponent } from 'ionic-selectable';
import { Observable } from 'rxjs/Rx';
import {Item} from '../_models/index';
import { CartService } from '../_services'
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';



class ShopDet {
  public shop_name:string;
}
@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.page.html',
  styleUrls: ['./place-order.page.scss'],
})

export class PlaceOrderPage implements OnInit {
  @ViewChild('itemListInput') selectRef: IonSelect;

  public shop_id;
  public task_id;
  public item:Item;
  public gst;
  public selected_item:Item[];
  public showList = true;
  placeForm: FormGroup;
  items_option :Item[];
  public shop_detail:ShopDet={
    shop_name:"",
  };
  public map_location = 'Not Fetched';
  public map_location_str = 'Not Fetched';

  public location_fetched:boolean=false;
  public uploadImagefront;
  public uploadImage1;
  processing0:boolean; 
  processing1:boolean;
  
  public file0;
  public file1;

  total_amount = 0;
  requestdata = {
    remarks:"hh",
  };

  constructor(
    public location: Location,
    private route: ActivatedRoute,
    private router: Router,
    private _apiservice: ApiService,
    public loadingController: LoadingController,
    private geolocation: Geolocation,
    public alertController: AlertController,
    private _formBuilder: FormBuilder,
    public actionSheetController: ActionSheetController,
    private camera: Camera,
    public navCtrl:NavController,
    private cartservices:CartService, 
    private nativeGeocoder: NativeGeocoder
  ) { }


  async ngOnInit() {
    this.cartservices.currentcartSubject.subscribe(
      data=>{
        this.selected_item = data;
      }
    )

    this.placeForm = this._formBuilder.group({      
      remarks:['',],  
      location:['',],
      picfront:['',],
      pic1:['',],
      items:['',], 
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
  displayItems(){
    this.router.navigate(["selectproducts"], {relativeTo:this.route});
    // this.selectRef.open();
  }

  // getSelectedItems():Observable<Item[]>{
  //   return this.route.data= this.selected_item;
  // }
  deleteItem(itm){
    var index = this.selected_item.indexOf(itm);
    this.selected_item.splice(index, 1);
    this.total_amount = this.total_amount - itm.price*itm.quantity;
    this.cartservices.setCartData(this.selected_item);
  } 

  async placeOrderFn(){
    this.placeForm.value.location = this.map_location; 
    this.placeForm.value.picfront = this.uploadImagefront;
    this.placeForm.value.pic1 = this.uploadImage1;
    this.placeForm.value.dealer = this.shop_id;
    var selected_item_list = [];
    for (let itm of this.selected_item){
      selected_item_list.push(
        {
          "item":itm.pk,
          "quantity":itm.quantity
        }
      )
    }
    this.placeForm.value.items = selected_item_list;

    if(! this.selected_item.length){
      this.presentAlert("Oops!!!","Please add order items.","");
    }
    else if(! this.location_fetched){
      this.presentAlert("Oops!!!","Please Fetch the Location.","");
    }
    else if(this.placeForm.valid && this.location_fetched && this.uploadImagefront && this.uploadImage1){
      const loading = await this.loadingController.create({
        message: 'Please Wait',
        duration: 20000
      });

      await loading.present();
      this._apiservice.postForm("api/sales/place_order",this.placeForm.value).subscribe(
        data => {
          loading.dismiss(); 
          this.clearcart();
          this.presentAlert("Success!!!","Order Placed Successfully.","");
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
  calculatePrice()
  {
    var amount =0;
    for (var itm of this.selected_item)
    {
      amount = amount+(itm.price*itm.quantity);
    }

    this.total_amount =amount;
    return this.total_amount;
  }
 
  clearcart()
  {
    this.cartservices.clearCart();
  }
  goback(){
    this.clearcart();
    this.location.back();
  }

  
}
