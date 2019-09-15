import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationService } from '../_services';
import { environment } from '../../environments/environment';
import {Item} from '../_models/index';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../_services';
import { Location } from "@angular/common";

import { LoadingController, ToastController,Events,ActionSheetController, AlertController,IonSelect, NavController } from '@ionic/angular';


@Component({
  selector: 'app-product-list-select',
  templateUrl: './product-list-select.page.html',
  styleUrls: ['./product-list-select.page.scss'],
})
export class ProductListSelectPage implements OnInit {
  public selected_items: Item[]=[]; 
  public cartItemCount=1;
  public userprof;
  public items;
  public search_items;
  public orig_items;
  public MEDIA_URL = environment.mediaUrl;



  constructor(
    private authenticationService: AuthenticationService,
    public _item:Item,
    private route: ActivatedRoute,
    private cartservices:CartService,
    public navCtrl:NavController,
    public location: Location,


  ) { }

  ngOnInit() {
    
    this.cartservices.currentcartSubject.subscribe(
      data=>{
        this.selected_items = data;
      }
    )
    
    this.authenticationService.CurrentUserProfile.subscribe( value => {
      this.userprof=value?value:{};
      this.items = value["products"];
      this.orig_items = value["products"];
      console.log(this.userprof);
    });
    console.log(this.route.data);
  }

  toggleSelection(item){
    var index = this.selected_items.indexOf(item);
    if(index<0){
      item["quantity"]=item["minimum_quantity"];
      this.selected_items.push(item);

    }
    else{
      this.selected_items.splice(index, 1);
    }
  }

  isSelected(item){
    var index = this.selected_items.indexOf(item);
    if(index<0){
     return false;
    }
    return true;
  }

  searchItems(event){
    this.items = this.orig_items;
    if(event.target.value.toString()==""){

    }
    else{
      this.items=this.items.filter(
        _item =>  _item.title.toLowerCase().indexOf(event.target.value.toString().toLowerCase()) > -1
      );
    }
    
  }

  clearSearchItems(){
    this.items = this.orig_items;
  }
  cancelCart(){
    this.location.back();
   
  }

  proceedCart(){
    this.cartservices.setCartData(this.selected_items);
    this.location.back();
  }
}
