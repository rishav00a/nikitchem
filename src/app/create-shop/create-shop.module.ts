import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';

import { IonicModule } from '@ionic/angular';

import { CreateShopPage } from './create-shop.page';

const routes: Routes = [
  {
    path: '',
    component: CreateShopPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CreateShopPage],
  providers:[Geolocation,Camera,NativeGeocoder]
})
export class CreateShopPageModule {}
