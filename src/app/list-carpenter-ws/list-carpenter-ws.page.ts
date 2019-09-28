import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import { LoadingController, ToastController,Events,NavController, AlertController,Platform } from '@ionic/angular';
import { Location } from "@angular/common";
import { environment } from '../../environments/environment';
import {ActivatedRoute, Router, ParamMap} from '@angular/router'; 
import { AuthenticationService } from '../_services';

@Component({
  selector: 'app-list-carpenter-ws',
  templateUrl: './list-carpenter-ws.page.html',
  styleUrls: ['./list-carpenter-ws.page.scss'],
})
export class ListCarpenterWsPage implements OnInit {

  public filter_icons = ["options","close"];
  public filter_enabled = 0;
  public shoplist=[];
  public initial_shoplist = [];
  public userprof;

  public assigned_cities = [];
  public pincodes = [];
  public localities = [];
  public city_id = null;
  public pincode_id = null;
  public locality_id = null;
  public default_localities = [
    {"pk":"0",
    "locality_name":"Not Available",
    "disabled":true
    }
  ]
  public default_pincodes = [
    {"pk":"0",
      "pin_code":"Not Available",
      "disabled":true
     }
  ];
  public search_string;

  constructor(
    private _apiservice: ApiService,
    public loadingController: LoadingController,
    private platform: Platform,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService,

  ) { }

  async ngOnInit() {
    this.authenticationService.CurrentUserProfile.subscribe( value => {
      this.userprof=value?value:{};
      this.assigned_cities = value["beat_plan"];
    });
    this.city_id = this.route.snapshot.queryParams['city_id'] || null;

    const loading = await this.loadingController.create({
      message: 'Please Wait',
      duration: 20000
    });

    await loading.present();
    this._apiservice.getOption("api/sales/get_assigned_carpenter").subscribe(data => { 
      this.shoplist=data;
      this.initial_shoplist = data;
      if(this.city_id){
        this.applyfilter();
      }
      loading.dismiss();
    });
  }
 
  doRefresh(event){
    this._apiservice.getOption("api/sales/get_assigned_carpenter").subscribe(data => { 
      this.initial_shoplist = data;
      this.applyfilter();
      event.target.complete();
    });
  }

  launchmap(geocoords, name_of_shop){
    if (this.platform.is("ios")){
      window.open('maps://?q=' + geocoords, '_system');
    }
    else {
      window.open('geo:0,0?q=' + geocoords + '(' + name_of_shop + ')', '_system');
    }
  }

  

  toggleFilter()
  {
    if(this.filter_enabled)
    {
      this.filter_enabled=0;
      this.city_id = this.route.snapshot.queryParams['city_id'] || null;
      this.pincode_id = null;
      this.locality_id = null;
      this.search_string = null;
      this.applyfilter()
    }
    else{
      this.filter_enabled =1;
    }
  }
  
  searchItems(event){
    if(event.target.value.toString()==""){ 
     this.search_string = null;
    }
    else{
      this.search_string = event.target.value.toString().toLowerCase(); 
    }
    this.applyfilter();
  }

  clearSearchItems(){
    this.search_string = null;
    this.applyfilter();
  }


  

  populatePincode(){
    this.localities = this.default_localities;
    this.pincodes = this.default_pincodes; 

    this.pincode_id = null;
    this.locality_id = null;
    if(this.city_id)
    {
      var city= this.assigned_cities.filter(
        _item=> _item.id==this.city_id
      )
  
      if(city[0]["pincodes"].length){
        this.pincodes=city[0]["pincodes"];
        this.pincode_id = null;
      }
    }
   this.applyfilter();
    
  }

  populateLocality(){
    this.localities = this.default_localities;
    this.locality_id = null;

    if(this.pincode_id){
      var pincode = this.pincodes.filter(
        _item=>_item.pk == this.pincode_id
      );
      if(pincode[0]){
        this.localities = pincode[0]["localities"];
      }
      
    }
    this.applyfilter();
    

  }


  applyfilter(){
    this.shoplist = this.initial_shoplist;
    if(this.locality_id)
    {
      this.shoplist = this.shoplist.filter(
        _item=>_item.locality_data.pk == this.locality_id && _item.pincode_data.pk == this.pincode_id 
      );
    }
    else if(this.pincode_id)
    {
      this.shoplist = this.shoplist.filter(
        _item=>_item.pincode_data.pk == this.pincode_id 
      );
    }
    else if(this.city_id)
    {
      this.shoplist = this.shoplist.filter(
        _item=>_item.city_data.pk == this.city_id 
      );
    }
    if(this.search_string){
      this.shoplist=this.initial_shoplist.filter(
        _item =>  _item.name.toLowerCase().indexOf(this.search_string) > -1
      );
    } 
  } 

}
