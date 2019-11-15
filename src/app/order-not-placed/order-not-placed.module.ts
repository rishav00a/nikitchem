import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { IonicModule } from '@ionic/angular';
import { OrderNotPlacedPage } from './order-not-placed.page';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';

const routes: Routes = [
  {
    path: ':id',
    component: OrderNotPlacedPage
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
  declarations: [OrderNotPlacedPage],
  providers:[
              Camera,
              Geolocation,
              NativeGeocoder
  ]
})
export class OrderNotPlacedPageModule {}
