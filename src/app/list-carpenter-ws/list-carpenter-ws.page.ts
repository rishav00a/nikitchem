import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import { LoadingController, ToastController,Events,NavController, AlertController,Platform } from '@ionic/angular';
import { Location } from "@angular/common";
import { environment } from '../../environments/environment';

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

  constructor(
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
    this._apiservice.getOption("api/sales/get_assigned_carpenter").subscribe(data => { 
      this.shoplist=data;
      this.initial_shoplist = data;
      loading.dismiss();
    });
  }
 
  doRefresh(event){
    this._apiservice.getOption("api/sales/get_assigned_carpenter").subscribe(data => { 
      this.shoplist=data;
      this.initial_shoplist = data;
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
    }
    else{
      this.filter_enabled =1;
    }
  }

}
