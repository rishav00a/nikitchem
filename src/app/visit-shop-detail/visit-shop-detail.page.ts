import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ApiService} from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, ToastController,Events,NavController, AlertController,Platform } from '@ionic/angular';
import { Location } from "@angular/common";
import { environment } from '../../environments/environment';
import { AuthenticationService } from '../_services';
import {ShopDetailModel} from '../_models';
import  {shopdetailinitdata} from '../_initdata/data';
@Component({
  selector: 'app-visit-shop-detail',
  templateUrl: './visit-shop-detail.page.html',
  styleUrls: ['./visit-shop-detail.page.scss'],
})
export class VisitShopDetailPage implements OnInit {
  public shop_id;
  public task_id;
  public shop_detail:ShopDetailModel=shopdetailinitdata;
  public MEDIA_URL = environment.mediaUrl;
  public userprof={};

  constructor(
              public location: Location,
              private route: ActivatedRoute,
              private router: Router,
              private _apiservice: ApiService,
              public loadingController: LoadingController,
              private authenticationService: AuthenticationService,
              private platform: Platform,

  ) { } 

  async ngOnInit() {
    const loading = await this.loadingController.create({
      message: 'Please Wait',
      duration: 20000
    });

    await loading.present();
    this.shop_id = this.route.snapshot.paramMap.get('id');
    this.task_id = this.route.snapshot.paramMap.get('task_id');
    this._apiservice.getOption("api/sales/shop_detail/"+this.shop_id).subscribe(data => {   
      console.log(data)   
      this.shop_detail=data[0];     
      loading.dismiss(); 
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


}
