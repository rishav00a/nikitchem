import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import { LoadingController, ToastController,Events,NavController, AlertController,Platform } from '@ionic/angular';
import { Location } from "@angular/common"; 
import { environment } from '../../environments/environment'; 
import { AuthenticationService } from '../_services';
@Component({
  selector: 'app-visit-shop',
  templateUrl: './visit-shop.page.html',
  styleUrls: ['./visit-shop.page.scss'],
})
export class VisitShopPage implements OnInit {
  public shoplist=[];
  public initial_shoplist = [];
  public MEDIA_URL = environment.mediaUrl;
  public filter_icons = ["options","close"]; 
  public filter_enabled = 0;
  public userprof;
  constructor(
    public location: Location,
    private _apiservice: ApiService,
    public loadingController: LoadingController,
    private platform: Platform,

  ) { }

  async ngOnInit() {
    const loading = await this.loadingController.create({
      message: 'Please Wait',
      duration: 20000
    });

    await loading.present();
    this._apiservice.getOption("api/sales/get_assigned_shops").subscribe(data => { 
      this.shoplist=data;
      this.initial_shoplist = data;
      console.log(this.shoplist);
      loading.dismiss();
    });
  }

  doRefresh(event){
    this._apiservice.getOption("api/sales/get_assigned_shops").subscribe(data => { 
      this.shoplist=data;
      this.initial_shoplist = data;
      event.target.complete();
    });
  }
  launchmap(geocoords, name_of_shop){
    console.log(geocoords)
    console.log(name_of_shop)
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
    }
    else{
      this.filter_enabled =1;
    }
  }
}
