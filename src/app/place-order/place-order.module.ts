import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';

import { IonicModule } from '@ionic/angular';

import { PlaceOrderPage } from './place-order.page';
import { IonicSelectableModule } from 'ionic-selectable';
import { ProductListSelectPage } from '../product-list-select/product-list-select.page';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';


const routes: Routes = [
  {
    path: '',
    component: PlaceOrderPage,
  },
  // {
  //   path: ':id/selectproducts',
  //   component:ProductListSelectPage
    // children: [
    //   {
    //     path: '',
    //     loadChildren: '../product-list-select/product-list-select.module#ProductListSelectPageModule',
    //     data:null,
    //   },
    // ]
  // }
  
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    IonicSelectableModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PlaceOrderPage,],
  providers:[
              Camera,
              Geolocation,
              NativeGeocoder
  ] 
})
export class PlaceOrderPageModule {}
