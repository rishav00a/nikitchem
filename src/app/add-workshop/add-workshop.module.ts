import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AddWorkshopPage } from './add-workshop.page';
import { IonicSelectableModule } from 'ionic-selectable';
import { ShopDetailModel } from '../_models'; 

const routes: Routes = [
  {
    path: '',
    component: AddWorkshopPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    IonicSelectableModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddWorkshopPage],
  providers:[Geolocation,ShopDetailModel]
})
export class AddWorkshopPageModule {}
